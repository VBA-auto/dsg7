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
import ReturnButton from "../ReturnButton";
import Head from "next/head";
import DSG7_dq381Button from "./All Modal/DSG7_DQ381/DSG7_dq381Button";
import DSG7_DQ200Button from "./All Modal/DSG7_DQ200/DSG7_DQ200Button";
import MECA_DSG7_DQ200Button from "./All Modal/MECA_DSG7_DQ200/MECA_DSG7_DQ200Button";
import MECA_DSG6_DQ250Button from "./All Modal/MECA_DSG6_DQ250/MECA_DSG6_DQ250Button";
import DW5_Clio_5Button from "./All Modal/DW5_Clio_5/DW5_Clio_5Button";
import DW5_Megane_4Button from "./All Modal/DW5_MEGANE_4/DW5_Megane_4Button";
import DW5_SCENIC_5Button from "./All Modal/DW5_SCENIC_5/DW5_SCENIC_5Button";
import DC4_DC0_DUSTERButton from "./All Modal/DC4_DC0_DUSTER/DC4_DC0_DUSTERButton";
import DC4_DC0_TWING0Button from "./All Modal/DC4_DC0_TWING0/DC4_DC0_TWING0Button";
import DC4_DC0_MEGANEButton from "./All Modal/DC4_DC0_MEGANE/DC4_DC0_MEGANEButton";

const DefaultSingle = ({ product }) => {
  console.log(product);
  const imageSlide = product?.image;
  return (
    <div>
      <Head>
        <title>{product?.metaTitle}</title>
        <meta name="description" content={product?.metaDes} />
        <meta name="headline" content={product?.metaH1} />
      </Head>
      <div className="max-w-7xl mx-auto mt-8 mb-24 px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:w-2/3 md:ms-auto">
            <ReturnButton />
            <ResponsiveSlider images={imageSlide} />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mt-2">{product?.title}</h1>
            <h3 className="text-[18px] text-gray-700 font-bold mt-2">
              {product?.paragraph}
            </h3>
            <h5
              className=" mt-2 font-[500] text-gray-800"
              dangerouslySetInnerHTML={{ __html: product?.description }}
            />

            {/* Price */}
            <h5 className="text-[18px] font-semibold text-red-500 mt-4">
              {product?.price} €
            </h5>
            {product?.status === "single" && (
              <div className="mt-5">
                <Link
                  href={product?.orderLink}
                  className="text-sm font-bold text-center uppercase tracking-wider px-8 py-2.5 text-white duration-300 rounded bg-gradient-to-r from-red-500 to-red-500 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
                >
                  COMMANDER
                </Link>
              </div>
            )}

            {product?.status === "double" && product?.product === "Captur" && (
              <ModalButtons />
            )}
            {product?.status === "double" &&
              product?.product === "clio-dc4" && <ClioModalButtons />}
            {product?.status === "double" && product?.product === "Clio RS" && (
              <ClioRSModalButtons />
            )}
            {product?.status === "double" && product?.product === "Megane" && (
              <MeganeModalButtons />
            )}
            {product?.status === "double" && product?.product === "Scenic" && (
              <ScenicModalButtons />
            )}

            {/* DSG7 */}
            {product?.status === "double" &&
              product?.product === "DSG7_DQ381" && <DSG7_dq381Button />}
            {product?.status === "double" &&
              product?.product === "DSG7_DQ200" && <DSG7_DQ200Button />}
            {product?.status === "double" &&
              product?.product === "MECA_DSG7_DQ200" && (
                <MECA_DSG7_DQ200Button />
              )}
            {product?.status === "double" &&
              product?.product === "MECA_DSG6_DQ250" && (
                <MECA_DSG6_DQ250Button />
              )}

            {/* DW5 */}
            {product?.status === "double" &&
              product?.product === "DW5_CLIO_5" && <DW5_Clio_5Button />}
            {product?.status === "double" &&
              product?.product === "DW5_MEGANE_4" && <DW5_Megane_4Button />}
            {product?.status === "double" &&
              product?.product === "DW5_SCENIC_5" && <DW5_SCENIC_5Button />}

            {/* DC4/DC0 */}
            {product?.status === "double" &&
              product?.product === "DC4_DC0_DUSTER" && <DC4_DC0_DUSTERButton />}
            {product?.status === "double" &&
              product?.product === "DC4_DC0_TWING0" && <DC4_DC0_TWING0Button />}
            {product?.status === "double" &&
              product?.product === "DC4_DC0_MEGANE" && <DC4_DC0_MEGANEButton />}
          </div>
        </div>
        <div className="mt-16">
          <RecommendedProducts reference={product.reference} id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default DefaultSingle;
