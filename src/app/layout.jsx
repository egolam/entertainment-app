import Navbar from "@/components/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "Entertainment Tonite",
  description: "A challenge from Frontend Mentor.",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className} flex bg-dark-blue`}>
        <Navbar />
        <div className="flex-1 pt-12 overflow-hidden">
          <SearchBar />
          {children}
        </div>
      </body>
    </html>
  );
}
