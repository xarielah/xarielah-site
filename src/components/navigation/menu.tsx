import Link from "next/link";

const menuLinks: MenuLink[] = [
  { title: "Works", href: "/works" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

type MenuLink = Readonly<{
  title: string;
  href: string;
}>;

export default function Menu() {
  return (
    <menu className="flex items-center gap-6">
      {menuLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </menu>
  );
}
