import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "GoalTec Solutions — IT Solutions That Drive Innovation",
  description: "High-performance software, scalable infrastructure and intuitive digital products for forward-thinking businesses.",
  icons: { icon: "./goaltec-website/src/app/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable + " font-sans"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
