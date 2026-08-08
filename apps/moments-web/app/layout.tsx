import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crayons Loop Moments — Private Event Streaming",
  description:
    "A private, elegant streaming experience for weddings, celebrations and client-delivered event films.",
  metadataBase: new URL("https://moments.crayonsloop.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crayons Loop Moments",
    description: "Private memories. Beautifully delivered.",
    url: "https://moments.crayonsloop.com",
    siteName: "Crayons Loop Moments",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
