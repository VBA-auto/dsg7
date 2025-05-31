"use client";
import { useState, useEffect } from "react";

const VehicleStockDisplay = ({ modelName, carType, onStockChange }) => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the Next.js backend API
  const url = "/api/cars"; // Replace external link with Next.js API route

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();

        // Find the vehicle by model and type
        const vehicle = data.find(
          (car) =>
            car.model.trim().toLowerCase() === modelName.trim().toLowerCase()
        );

        if (vehicle && vehicle.types[carType.toLowerCase()]) {
          const typeData = vehicle.types[carType.toLowerCase()];
          const stockValue = parseInt(typeData.stock, 10);
          setStock(stockValue);

          if (onStockChange) {
            onStockChange(stockValue);
          }
        } else {
          setError("Vehicle or type not found.");
        }
      } catch (err) {
        setError(`Failed to fetch stock: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, [modelName, carType, onStockChange, url]);

  if (loading) {
    return (
      <div className="flex items-center justify-between">
        <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
          <span className="md:w-[10px] md:h-[10px] w-[10px] h-[10px] bg-gray-300 rounded-full block"></span>
          En stock:
        </p>

        <span className="loading loading-ring loading-xs"></span>
      </div>
    );
  }

  return (
    <div className="">
      <p className="text-gray-700 py-1 text-center rounded-md flex justify-end items-center gap-2 text-[15px]">
        <span
          className={`md:w-[10px] md:h-[10px] w-[10px] h-[10px] ${
            stock <= 1
              ? "bg-red-500"
              : stock <= 3
              ? "bg-yellow-500"
              : "bg-[#2aa31fc4]"
          } rounded-full block`}
        ></span>
        En stock:{" "}
        <span
          className={`${
            stock <= 1
              ? "text-red-500"
              : stock <= 3
              ? "text-yellow-500"
              : "text-[#2aa31fc4]"
          } font-[500]`}
        >
          {stock}
        </span>
      </p>
    </div>
  );
};

export default VehicleStockDisplay;
