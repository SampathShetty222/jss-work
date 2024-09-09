/* eslint-disable react/prop-types */
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jss Noida",
  description: "Jss Noida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
