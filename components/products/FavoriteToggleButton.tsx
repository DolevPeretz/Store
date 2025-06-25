import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { featchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./favoriteToggleForm";

async function FavoriteToggleButton({ productID }: { productID: string }) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await featchFavoriteId(productID);

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productID} />;
}

export default FavoriteToggleButton;
