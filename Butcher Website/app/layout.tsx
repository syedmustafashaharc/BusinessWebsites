import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sallo Cuts - Premium Butcher in London",
  description:
    "Premium butcher shop in London offering hand-cut meats, grass-fed beef, lamb, poultry and specialty cuts. Fresh, quality meat delivered to your door.",
  keywords: [
    "butcher",
    "London",
    "meat",
    "beef",
    "lamb",
    "pork",
    "premium",
    "hand-cut",
  ],
  authors: [{ name: "Salman Tahir" }],
  openGraph: {
    title: "Sallo Cuts - Premium Butcher in London",
    description: "Premium butcher shop offering hand-cut meats and specialty cuts",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
