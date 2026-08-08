import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crayons Loop Admin",
  description: "Operational control surface for Crayons Loop and Crayons Loop Moments.",
  metadataBase: new URL("https://admin.crayonsloop.com"),
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
