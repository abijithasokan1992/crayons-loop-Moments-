import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crayons Loop — Find Your Next Story",
  description:
    "Crayons Loop is a consumer entertainment destination for films, series, documentaries, family viewing and curated regional stories.",
  metadataBase: new URL("https://www.crayonsloop.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crayons Loop — Find Your Next Story",
    description: "Films, series, documentaries and regional stories. Less clutter. Better discovery.",
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
