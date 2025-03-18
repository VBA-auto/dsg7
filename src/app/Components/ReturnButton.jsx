"use client";
import { IoArrowBackSharp } from "react-icons/io5";

const ReturnButton = () => {
  return (
    <div>
      <div className="">
        <button
          className="flex items-center rounded-md"
          onClick={() => window.history.back()}
        >
          <IoArrowBackSharp className="text-red-500 text-md mr-1" />
          <p className="text-red-500 text-[18px] font-[500]">retour</p>
        </button>
      </div>
    </div>
  );
};

export default ReturnButton;
