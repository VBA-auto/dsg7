"use client";

import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import PricngPop890 from "@/app/Components/PricngPop890";
import ReturnButton from "@/app/Components/ReturnButton";
import VehicleStockDisplay from "@/app/Components/VehicleStockDisplay";
import ResponsiveSlider from "@/app/Components/ResponsiveSlider";

const imagesSlide = [
  "/images/cal-normal-0.webp",
  "/images/cal-normal-1.webp",
  "/images/cal-normal-2.webp",
  "/images/cal-normal-3.webp",
  "/images/cal-normal-4.webp",
  "/images/cal-normal-5.webp",
  "/images/cal-normal-6.webp",
  "/images/cal-normal-7.webp",
];

const ClioDiesel = () => {
  const [stock, setStock] = useState(null);

  const handleStockChange = (currentStock) => {
    setStock(currentStock);
  };

  return (
    <main>
      <Head>
        <title>Calculateur Renault Captur 1.5 Diesel</title>
        <meta name="title" content="Calculateur Renault Captur 1.5 Diesel" />
        <meta
          name="description"
          content="Trouver ici votre calculateur pour boite automatique pour Renault Captur 1.5 Diesel programmation incluse"
        />
      </Head>
      <section className="produits ">
        <div className="">
          <div className="container mx-auto mb-2.5">
            <div className="xl:w-4/4 mx-auto xl:min-h-[538px]">
              <div className="xl:flex  justify-center">
                <div className="xl:w-[500px] p-4  bg-white rounded-tl-[5px] ">
                  <div className="xl:flex items-center">
                    <div className="xl:w-[500px]   rounded-s-md ">
                      <p className="text-[14px] mt-1">
                        <Link href="/">
                          <span className="text-gray-400">Home </span>&gt;
                        </Link>
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          Renault
                        </span>{" "}
                        &gt;
                        <span className="text-gray-400 hover:underline">
                          {" "}
                          Clio 4
                        </span>{" "}
                        &gt;
                        <span className="text-gray-700 hover:underline">
                          {" "}
                          1.5 Diesel
                        </span>{" "}
                      </p>
                      <div className="w-full mt-5">
                        <div className="max-h-[280px]">
                          <ResponsiveSlider images={imagesSlide} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ///////////////////////////////// */}
                <div className="xl:w-[500px] bg-white rounded-tr-[5px] border-l-[1px] border-gray-300 md:pb-0 pb-1 ">
                  <div className="flex justify-between items-center px-4 pt-4 pb-1 singretur">
                    <ReturnButton />
                    <div className="">
                      <VehicleStockDisplay
                        modelName="Renault Clio 4"
                        carType="diesel"
                        onStockChange={handleStockChange}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="px-4 mb-2">
                      <p className="text-[14px] text-gray-400">Désignation</p>
                      <h1 className="text-[15px]">
                        Calculateur Renault Clio 4 - 1.5 Diesel
                      </h1>
                    </div>

                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Description</p>
                      <p className="text-[15px]">
                        Module de commande (calculateur) Renault Clio 4 Diesel
                      </p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Compatibilité</p>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-gray-100  px-2 text-[14px] text-black mt-1 rounded">
                          Clio 4
                        </button>
                      </div>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Garantie</p>
                      <p className="text-[15px]">12 mois neuf</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Véhicule</p>
                      <p className="text-[15px]">Clio 4 - 1.5 Diesel</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">
                        Info complémentaire
                      </p>
                      <p className="text-[15px]">Clio 4 à partir de 2012</p>
                    </div>
                    <div className="px-4 mb-3">
                      <p className="text-[14px] text-gray-400">Référence OE</p>
                      <p className="text-[15px]">A2C30743000 - 01 K00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="px-4 mb-8">
                  <PricngPop890 />
                </div>
              </div>

              {/* ////////////////////////// */}

              <div className="bg-white border-t border-gray-300 rounded-b-[5px] xl:w-[950px] mx-auto md:pt-0 pt-5">
                <div className="md:flex md:px-0 px-4 py-1 justify-between">
                  <div className="md:w-1/2 flex items-center gap-5 mt-2">
                    <div className=" py-2 bg-white rounded-md">
                      <Image
                        src={imagesSlide[0]}
                        width={60}
                        height={50}
                        className="w-[60px] h-[40px]"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">Renault</p>
                      <h1 className="my-1">Clio 4 - 1.5 Diesel</h1>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center md:justify-end justify-center gap-5">
                    <div className="text-center">
                      {stock === 0 ? (
                        <>
                          <div className="md:flex gap-5 mt-3 md:mt-0 items-center">
                            <div className="flex gap-3 items-center mb-3 md:mb-0">
                              <FaArrowRight className="text-[14px] text-[#2C80EF] animate-slide-arrow" />
                              <p className="text-[15px] text-[#5BB853]">
                                Bientôt disponible
                              </p>
                            </div>
                            <Link href="/contact">
                              {" "}
                              <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-2 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto">
                                Contactez-nous
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="w-full">
                          <div className="text-center">
                            <Link
                              target="_blank"
                              href="https://buy.stripe.com/14k17I3pC5h50Ug8y1"
                            >
                              <button className="text-[16px] font-bold text-center uppercase tracking-wider px-12 py-2.5 text-white duration-300 rounded cursor-pointer bg-gradient-to-r from-red-600 to-red-600 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all">
                                Valider
                              </button>
                            </Link>
                          </div>
                          {/* <button
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                            className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                          >
                            Buy Now
                          </button> */}
                        </div>
                      )}
                      {/* <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className=" bg-[#2C80EF] text-white rounded-md text-center border border-[#2C80EF] py-2 px-5 shadow-2xl hover:text-[#fff] hover:bg-[#2c80efd7] text-[15px] md:my-0 my-5"
                      >
                        Commander
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-white">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="">
                  <div className=" flex items-center gap-5 mb-5">
                    <div className=" py-2 bg-white rounded-md">
                      <Image
                        src={imagesSlide[0]}
                        width={60}
                        height={50}
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="">
                      <p className="text-[15px] text-gray-500">Renault</p>
                      <h1 className="my-1">Captur 1.2 Essence</h1>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-3">
                    <PricngPop890 />
                  </div>

                  <div className="mt-5">
                    <hr />
                    <div className="flex justify-between my-2 ">
                      <p className="text-gray-600 text-[15px]">Total </p>
                      <h4 className="text-red-600 text-[15px] prices">
                        1139.00 €
                      </h4>
                    </div>
                  </div>
                  <PricngPop890 />
                  <div className="text-center">
                    <Link
                      target="_blank"
                      href="https://buy.stripe.com/9AQ03E9O0cJx9qMeWw"
                    >
                      <button className="text-[16px] font-bold text-center uppercase tracking-wider px-12 py-2.5 text-white duration-300 rounded cursor-pointer bg-gradient-to-r from-red-600 to-red-600 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all">
                        Valider
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClioDiesel;
