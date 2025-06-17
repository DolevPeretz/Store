type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/product", label: "products" },
  { href: "/favorite", label: "favorites" },
  { href: "/cart", label: "cart" },
  { href: "/order", label: "orders" },
];
