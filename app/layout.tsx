import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/presentation/components/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FitScore App - People Analytics com IA",
  description: "A aplicação que transforma dados em insights acionáveis para equipes de alto desempenho.",
};

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
