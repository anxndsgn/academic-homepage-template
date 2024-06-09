import { Inter } from "next/font/google";
import "./globals.css";
import { websiteInfo } from "../../website.config";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: websiteInfo.title,
  description: websiteInfo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
