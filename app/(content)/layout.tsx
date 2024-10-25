import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "UTSC ACF",
};

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-beige`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
