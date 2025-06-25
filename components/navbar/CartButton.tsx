import { Button } from "../ui/button";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

async function CartButton() {
  const numItemInCart = 0;
  return (
    <Button
      asChild
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
