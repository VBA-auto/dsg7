import React from "react";
import Link from "next/link";
const BuyButton = ({text}) => {
  return (
    <div>
      <div className="">
        <Link
          href="/shop"
          className="text-lg font-bold text-center uppercase tracking-wider px-12 py-2.5 text-white duration-300 rounded bg-gradient-to-r from-red-400 to-red-600 hover:shadow-lg hover:shadow-[#6B8375]/50 hover:scale-105 transition-all"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default BuyButton;
