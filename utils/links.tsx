type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorite", label: "favorites" },
  { href: "/cart", label: "cart" },
  { href: "/order", label: "orders" },
  { href: "/admin/sales", label: "dashboards" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];
