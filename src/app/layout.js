import { Inter } from "next/font/google";
import "./globals.css";
import websiteInfo from "../../website-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: websiteInfo.title,
  description: websiteInfo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
