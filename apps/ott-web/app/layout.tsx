import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crayons Loop — Watch Stories That Stay With You",
  description:
    "Crayons Loop is a premium entertainment destination for films, series, documentaries and curated regional stories.",
  metadataBase: new URL("https://www.crayonsloop.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crayons Loop",
    description: "Premium entertainment, curated for every screen.",
    url: "https://www.crayonsloop.com",
    siteName: "Crayons Loop",
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
