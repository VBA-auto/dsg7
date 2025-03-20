// app/layout.js
import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
});

export const metadata = {
  title: "DSG7",
  description: "Spécialiste DSG & EDC - Réparation & Vente | DSG7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${alumniSans.variable} font-sans`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
