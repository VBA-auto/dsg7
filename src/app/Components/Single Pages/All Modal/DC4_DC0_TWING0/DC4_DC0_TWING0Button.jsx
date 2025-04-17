"use client";
import React, { useState } from "react";
import DC4_DC0_TWING0Modal from "./DC4_DC0_TWING0Modal";

const DC4_DC0_TWING0Button = () => {
  const [modalContent, setModalContent] = useState(null); // State to manage modal content

  const handleEssence = () => {
    setModalContent(<DC4_DC0_TWING0Modal />); // Set modal content to CaptureEssence
    document.getElementById("DC4_DC0_DUSTERButtonModal").showModal(); // Open the modal
  };

  // const handleDiesel = () => {
  //   setModalContent(<ClioDiesel />); // Set modal content to CaptureDiesel
  //   document.getElementById("DC4_DC0_DUSTERButtonModal").showModal(); // Open the modal
  // };

  return (
    <div>
      <div className="mt-5">
        <button
          onClick={handleEssence} // Call handleEssence on click
          className="text-sm font-bold text-center uppercase tracking-wider px-8.5 py-2.5 text-white duration-300 rounded bg-gradient-to-r from-red-500 to-red-500 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all me-3 cursor-pointer"
        >
          COMMANDER
        </button>
        {/* <button
          onClick={handleDiesel}
          className="text-sm font-bold text-center uppercase tracking-wider px-10 py-2.5 text-white duration-300 cursor-pointer rounded bg-gradient-to-r from-red-500 to-red-500 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
        >
          1.5 Diesel
        </button> */}
      </div>

      {/* Modal */}
      <dialog id="DC4_DC0_DUSTERButtonModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          {modalContent}
        </div>
      </dialog>
    </div>
  );
};

export default DC4_DC0_TWING0Button;
