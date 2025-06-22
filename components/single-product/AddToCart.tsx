import { Button } from "../ui/button";

const AddToCart = ({ ProductID }: { ProductID: string }) => {
  return (
    <Button className="capitalize mt-8" size="lg">
      AddToCart
    </Button>
  );
};

export default AddToCart;
