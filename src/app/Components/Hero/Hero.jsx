import Image from "next/image";
import React from "react";
import BuyButton from "../Buttons/BuyButton";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
    <div className="hero">
      {/* Content Container */}
      <div className="ms-30 text-white">
        <div className="">
          {/* Bold Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">DSG7</h1>

          {/* Paragraph */}
          <h3 className="text-[18px] max-w-2xl mb-8">
            This sample paragraph provides some information about the hero
            section. <br /> You can customize this text as needed.
          </h3>
        </div>

        {/* Button */}
        <BuyButton text="see produits" />
      </div>

      {/* Small Cards Container */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-20">
        {/* Card 1: Fast Delivery */}
        <div className=" text-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg text-center w-48">
          <FaShippingFast className="text-3xl mx-auto mb-2" />
          <h4 className="font-semibold">Fast Delivery</h4>
          <p className="text-sm">Quick and reliable shipping</p>
        </div>

        {/* Card 2: Best Service */}
        <div className=" text-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg text-center w-48">
          <FaHeadset className="text-3xl mx-auto mb-2" />
          <h4 className="font-semibold">Best Service</h4>
          <p className="text-sm">24/7 customer support</p>
        </div>

        {/* Card 3: Quality Assurance */}
        <div className=" text-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg text-center w-48">
          <FaShieldAlt className="text-3xl mx-auto mb-2" />
          <h4 className="font-semibold">Quality Assurance</h4>
          <p className="text-sm">Genuine car parts</p>
        </div>

        {/* Card 4: Affordable Prices */}
        <div className=" text-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg text-center w-48">
          <FaMoneyBillWave className="text-3xl mx-auto mb-2" />
          <h4 className="font-semibold">Affordable Prices</h4>
          <p className="text-sm">Competitive pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;