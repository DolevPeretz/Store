import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { promises } from "dns";
import { redirect } from "next/navigation";
import { productSchema, validateWithZodSchema, imageSchema } from "./schemas";
import { uploadImage } from "./supabase";
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

export const featchFeatcherProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};
export const featchAllProducts = ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async ({
  ProductID,
}: {
  ProductID: string;
}) => {
  const product = await db.product.findUnique({
    where: {
      id: ProductID,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  "use server";
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullpath = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullpath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/products");
};
const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};
