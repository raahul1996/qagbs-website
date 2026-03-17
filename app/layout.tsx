import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QAGB — Quick Actuality Global Services",
  description:
    "Quick Actuality Global Services (QAGBS) provides modern accounting solutions, SaaS platforms, and business consulting to help companies grow and scale globally.",
  keywords: ["accounting", "SaaS", "business consulting", "QAGB", "financial solutions", "global services"],
  openGraph: {
    title: "QAGB — Quick Actuality Global Services",
    description: "Modern accounting & SaaS solutions for businesses worldwide.",
    url: "https://qagbs.com",
    siteName: "QAGBS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
