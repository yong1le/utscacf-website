import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us - UTSC ACF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
