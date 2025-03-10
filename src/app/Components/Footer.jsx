"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="text-gray-800 mb-5">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">DSG7.FR</h2>
            <p className="text-gray-800 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/shop" className="hover:text-white">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-800 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-800 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-800 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-gray-800 hover:text-white"
              >
                <FaYoutube size={20} />
              </a>
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
