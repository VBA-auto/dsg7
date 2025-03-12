import Image from "next/image";
import React from "react";
import BuyButton from "../Buttons/BuyButton";
import { FaShippingFast, FaHeadset, FaWhatsapp } from "react-icons/fa"; // Import icons
import { TbRestore } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Link from "next/link";
import ReviewSlider from "../Review";

const Hero = () => {
  return (
    <div className="hero">
      <div className="max-w-7xl mx-auto mt-24">
        <div className="flex gap-5 justify-baseline items-center ">
          <div className="md:w-1/2">
            <div className="">
              <div className="">
                {/* Bold Title */}
                <h1 className="text-5xl font-bold">
                  Spécialiste boite automatique
                </h1>
                <h1 className="text-4xl mb-4 font-bold">Renault et DSG</h1>
              </div>
            </div>
            <div className="flex gap-2 mb-8">
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 ">
                {[
                  {
                    href: "/captur",
                    src: "/images/calculators.png",
                    alt: "Renault Captur",
                    label: "Renault DC4",
                  },

                  {
                    href: "/clio",
                    src: "/images/dsg7dq200.png",
                    alt: "Renault Clio IV",
                    label: "DSQ7",
                  },
                  {
                    href: "/megane",
                    src: "/images/dq381.png",
                    alt: "Renault Megane",
                    label: "DQ381",
                  },
                  {
                    href: "/scenic",
                    src: "/images/6hp.png",
                    alt: "Renault Scenic",
                    label: "6HP",
                  },
                  {
                    href: "/fluence",
                    src: "/images/8hp.png",
                    alt: "Renault Fluence",
                    label: "8HP",
                  },
                  {
                    href: "/clio-rs",
                    src: "/images/dsg7dq200.png",
                    alt: "Ford Focus",
                    label: "DQ200",
                  },
                ].map((car, index) => (
                  <div key={index} className="carsCard rounded-md">
                    <Link
                      rel="preload"
                      href={car.href}
                      className="text-[17px] font-[500] text-center"
                    >
                      <Image
                        width={110}
                        height={100}
                        src={car.src}
                        alt={car.alt}
                        loading="lazy"
                        className="m-auto h-[70px] object-contain"
                      />
                      {car.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Button */}
            <BuyButton href="produits" text="Nos produits" />
          </div>
          <div className="md:w-1/2">
            <div className="">
              <div className="relative">
                <video
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  className="myVideo rounded-md md:block hidden"
                >
                  <source src="/images/hero.webm" type="video/webm" />
                </video>
                <Link
                  href="https://api.whatsapp.com/send?phone=0145147254"
                  target="_blank"
                >
                  <div className="absolute bottom-5 right-5 bg-[#5dca54] rounded-full p-2 md:block hidden">
                    <FaWhatsapp className="text-white text-3xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-around gap-10">
          {/* Card 1: Fast Delivery */}
          <div className=" text-black  p-4 rounded-lg text-center">
            <FaShippingFast className="text-3xl mx-auto mb-2" />
            <h4 className="font-semibold">Livraison</h4>
            <p className="text-sm">Livraison en 48 heures</p>
          </div>

          {/* Card 2: Best Service */}
          <div className=" text-black  p-4 rounded-lg text-center">
            <FaHeadset className="text-3xl mx-auto mb-2" />
            <h4 className="font-semibold">Support</h4>
            <p className="text-sm">Support en ligne</p>
          </div>

          {/* Card 3: Quality Assurance */}
          <div className=" text-black  p-4 rounded-lg text-center">
            <TbRestore className="text-3xl mx-auto mb-2" />
            <h4 className="font-semibold">Reconditionnée</h4>
            <p className="text-sm">pieces d’origine ou reconditionnée</p>
          </div>

          {/* Card 4: Affordable Prices */}
          <div className=" text-black  p-4 rounded-lg text-center">
            <AiFillSafetyCertificate className="text-3xl mx-auto mb-2" />
            <h4 className="font-semibold">Garantie</h4>
            <p className="text-sm">Garantie satidfait ou remboursé</p>
          </div>
        </div>
        <div className="my-16">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
