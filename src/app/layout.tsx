import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className={`body-bg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
