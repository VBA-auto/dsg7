// app/layout.js
import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Script from "next/script";

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
      <head>
        <script
          type="text/javascript"
          charset="UTF-8"
          src="//cdn.cookie-script.com/s/2dfaac991e926201f6835d73ddea8f26.js"
          async
        ></script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KBNRP5KN');`}
        </script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1NPTK4G84N"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1NPTK4G84N');`}
        </Script>
        {/* End Google tag (gtag.js) */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBNRP5KN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
