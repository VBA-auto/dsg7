"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-800 pb-5 ">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">DSG7.FR</h2>
            <p className="text-red-500 text-sm">
              Spécialiste boite EDC / DSG double embrayage
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Liens rapide</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/produits" className="hover:text-red-400">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-red-400">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nous suivre</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-800 hover:text-red-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-800 hover:text-red-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-800 hover:text-red-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-gray-800 hover:text-red-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
            <div className="mt-3">
              <p className="underline hover:text-red-400">
                <Link href="/politique-de-cookies">
                  Politique de cookies (UE)
                </Link>
              </p>
            </div>
            <div className="mt-1">
              <p className="underline hover:text-red-400">
                <Link href="/mentions-legales">Mentions légales</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-5">
          <p>© {new Date().getFullYear()} DSG7. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
