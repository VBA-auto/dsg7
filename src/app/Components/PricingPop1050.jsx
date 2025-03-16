import React from "react";

const PricingPop1050 = () => {
  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Prix</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <p className="text-red-700 text-[15px] prices">1050.00 €</p>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Programmation</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <p className="text-red-700 text-[15px] prices">00 €</p>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Transport</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <p className="text-red-700 text-[15px] prices">19.00 €</p>
      </div>
    </div>
  );
};

export default PricingPop1050;
