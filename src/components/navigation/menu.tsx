import Link from "next/link";

const menuLinks: MenuLink[] = [
  { title: "Works", href: "/works" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

type MenuLink = Readonly<{
  title: string;
  href: string;
}>;

export default function Menu() {
  return (
    <menu className="flex items-center gap-6 justify-center pb-1">
      {menuLinks.map((link) => (
        <li
          key={link.href}
          className="hover:scale-[1.1] ease-in-out duration-200 "
        >
          <Link href={link.href} className="text-gray-700 text-sm">
            {link.title}
          </Link>
        </li>
      ))}
    </menu>
  );
}
