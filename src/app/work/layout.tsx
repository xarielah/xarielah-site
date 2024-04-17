import WorkGoHome from "@/components/navigation/work-go-home";
import Footer from "@/components/sections/footer";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " md:p-0 p-3"}>
        <WorkGoHome />
        <main className="max-w-3xl mx-auto">
          {children}
          {/* <ContactPlug /> */}
        </main>
        <footer className="max-w-3xl mx-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
