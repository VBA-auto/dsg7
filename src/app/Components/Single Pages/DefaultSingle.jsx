import Image from "next/image";
import React from "react";
import ResponsiveSlider from "../ResponsiveSlider";
import Link from "next/link";
import ModalButtons from "./All Modal/Captur/ModalButtons";
import ClioModalButtons from "./All Modal/Clio/ClioModalButtons";
import ClioRSModalButtons from "./All Modal/Clio RS/ClioRsModalButtons";
import MeganeModalButtons from "./All Modal/Megane/MeganeModalButtons";
import ScenicModalButtons from "./All Modal/Scenic/ScenicModalButtons";
import RecommendedProducts from "./References";

const DefaultSingle = ({ product }) => {
  console.log(product);
  const imageSlide = product?.image;
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-2/3 ms-auto">
            <ResponsiveSlider images={imageSlide} />
            {/* <Image width={600} height={500} src={product?.image} alt="sd" /> */}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mt-2">{product?.title}</h1>
            <h3 className="text-[18px] text-gray-700 font-bold mt-2">
              {product?.paragraph}
            </h3>
            <p
              className=" mt-2 font-[500] text-gray-800"
              dangerouslySetInnerHTML={{ __html: product?.description }}
            />

            {/* Price */}
            <h5 className="text-[18px] font-semibold text-blue-500 mt-4">
              {product?.price}€
            </h5>
            {product?.status === "single" && (
              <div className="mt-5">
                <Link
                  href={product?.orderLink}
                  className="text-sm font-bold text-center uppercase tracking-wider px-8 py-2.5 text-white duration-300 rounded bg-gradient-to-r from-red-600 to-red-600 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
                >
                  Buy Now
                </Link>
              </div>
            )}

            {product?.status === "double" && product?.product === "Captur" && (
              <ModalButtons />
            )}
            {product?.status === "double" && product?.product === "Clio" && (
              <ClioModalButtons />
            )}
            {product?.status === "double" && product?.product === "Clio RS" && (
              <ClioRSModalButtons />
            )}
            {product?.status === "double" && product?.product === "Megane" && (
              <MeganeModalButtons />
            )}
            {product?.status === "double" && product?.product === "Scenic" && (
              <ScenicModalButtons />
            )}
          </div>
        </div>
        <div className="mt-16">
          <RecommendedProducts />
        </div>
      </div>
    </div>
  );
};

export default DefaultSingle;
