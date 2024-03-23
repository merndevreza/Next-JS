import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLink";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-700">
          <ul className="flex p-3 gap-3">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/settings">settings</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
