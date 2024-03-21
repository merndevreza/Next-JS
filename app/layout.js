import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-700">
          <ul className="flex p-3 gap-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}
