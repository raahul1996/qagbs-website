import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QAGBS — Quick Acuity Global Business Solutions",
  description:
    "Quick Acuity Global Business Solutions (QAGBS) delivers global accounting, tax advisory, ERP implementation, and business support services. Clarity in Finance. Confidence in Growth.",
  keywords: ["accounting", "tax advisory", "ERP implementation", "internal audit", "QAGBS", "global business solutions", "financial services", "compliance"],
  openGraph: {
    title: "QAGBS — Quick Acuity Global Business Solutions",
    description: "Clarity in Finance. Confidence in Growth. Global accounting, advisory, and business support services.",
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
