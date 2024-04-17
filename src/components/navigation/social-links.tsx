import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="flex space-x-4">
      <SocialIcon href="https://www.linkedin.com/in/ariel-aharon-580899202/">
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon href="https://github.com/xarielah">
        <FaGithub />
      </SocialIcon>
    </section>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-gray-200 hover:bg-gray-300 ease-in-out duration-200 p-2 text-xl rounded-full text-gray-800"
    >
      {children}
    </Link>
  );
}
