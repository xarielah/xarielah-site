import Link from "next/link";
import Hash from "../elements/hash";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <h1 className="text-4xl font-medium flex items-center">
        <Hash className="w-8 h-8 text-purple-500" />
        xarielah
      </h1>
    </Link>
  );
}
