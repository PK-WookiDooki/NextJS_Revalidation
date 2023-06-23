import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pyaesone Khant's Blog",
  description: "Created by Pyaesone Khant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800`}>
        {" "}
        <Navbar /> <Profile /> {children}
      </body>
    </html>
  );
}
