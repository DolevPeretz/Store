import { Separator } from "@radix-ui/react-dropdown-menu";

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
    {text}
  </h2>
);

export default SectionTitle;
