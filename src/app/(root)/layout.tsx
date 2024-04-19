import HeaderLogo from "@/components/navigation/header-logo";
import Menu from "@/components/navigation/menu";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariel Aharon | FullStack Developer",
  description:
    "Personal portfolio and blog of Ariel Aharon, a fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " md:p-0 p-3"}>
        <header className="max-w-screen-sm px-8 mx-auto">
          <HeaderLogo />
          <Menu />
        </header>
        <main className="max-w-screen-sm px-8 mx-auto border-t-[1px] border-t-gray-200 mt-2 pt-8">
          {children}
        </main>
        <footer className="max-w-screen-sm px-8 mx-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
