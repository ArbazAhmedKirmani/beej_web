import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "BEEJ",
  description: "Beej Syndicate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body-bg`}>{children}</body>
    </html>
  );
}
