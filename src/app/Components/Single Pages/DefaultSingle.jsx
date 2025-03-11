import Image from "next/image";
import React from "react";
import ResponsiveSlider from "../ResponsiveSlider";

const DefaultSingle = ({ product }) => {
  console.log(product);
  const imageSlide = product?.image;
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-2/3 ms-auto">
            <ResponsiveSlider images={imageSlide} />
            <Image width={600} height={500} src={product?.image} alt="sd" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mt-2">{product?.title}</h1>
            <p className="text-gray-600 mt-2">{product?.description}</p>

            {/* Price */}
            <p className="text-2xl font-semibold text-blue-500 mt-4">
              {product?.price}
            </p>
            <div className="mt-5">
              <label
                htmlFor="my-drawer-4"
                className="border px-2 py-2 bg-gray-300 cursor-pointer"
              >
                Shop Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultSingle;
