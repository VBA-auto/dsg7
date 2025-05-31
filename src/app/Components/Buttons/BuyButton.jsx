import React from "react";
import Link from "next/link";
const BuyButton = ({ href, text }) => {
  return (
    <div>
      <div className="">
        <Link
          href={`/${href}`}
          className="text-lg font-bold text-center uppercase tracking-wider px-12 py-2.5 text-white duration-300 rounded bg-gradient-to-r from-red-500 to-red-500 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default BuyButton;
