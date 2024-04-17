import Link from "next/link";

export default function WorkGoHome() {
  return (
    <nav className="mx-auto max-w-3xl font-medium w-full my-8">
      <Link
        href="/"
        className="text-zinc-600 text-sm hover:text-zinc-500 ease-in-out duration-200"
      >
        ← Home
      </Link>
    </nav>
  );
}
