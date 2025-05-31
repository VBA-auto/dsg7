"use client";
import { IoArrowBackSharp } from "react-icons/io5";

const ReturnButton = () => {
  return (
    <div>
      <div className="">
        <button
          className="flex items-center rounded-md cursor-pointer"
          onClick={() => window.history.back()}
        >
          <IoArrowBackSharp className="text-red-500 text-md mr-1" />
          <p className="text-red-500 text-[19px] font-[600]">Retour</p>
        </button>
      </div>
    </div>
  );
};

export default ReturnButton;
