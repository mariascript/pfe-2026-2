import { Betania_Patmos } from "next/font/google";
import "./globals.css";

const betaniaPatmos = Betania_Patmos({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mini Bio",
  description: "Minha mini bio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={betaniaPatmos.className}>{children}</body>
    </html>
  );
}