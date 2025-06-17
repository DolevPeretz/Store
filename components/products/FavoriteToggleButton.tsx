import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

function FavoriteToggleButton({ productID }: { productID: string }) {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
    ></Button>
  );
}

export default FavoriteToggleButton;
