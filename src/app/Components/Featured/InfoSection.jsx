import React from "react";
import Image from "next/image";
import BuyButton from "../Buttons/BuyButton";

const InformativeSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="relative h-96">
            <Image
              src="/images/info.jpg" // Replace with your image path
              alt="Informative Section"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              About DSG7 Car Parts
            </h2>
            <p className="text-gray-600">
              At DSG7, we are dedicated to providing high-quality car parts and
              accessories to keep your vehicle running smoothly. With years of
              experience in the automotive industry, we offer a wide range of
              products, from engine components to exterior accessories.
            </p>
            <p className="text-gray-600">
              Our team of experts is committed to delivering exceptional
              customer service and ensuring you find the right parts for your
              car. Whether you're a professional mechanic or a car enthusiast,
              DSG7 has everything you need.
            </p>

            {/* Call to Action Button */}
            <BuyButton href="about-us" text="About us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformativeSection;
