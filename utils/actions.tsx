import db from "@/utils/db";
import { redirect } from "next/navigation";

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
