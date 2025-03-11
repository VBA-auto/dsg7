import React from "react";

const PricngPop890 = () => {
  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px] font-[500]">Prix</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <h4 className="text-red-600 text-[15px] prices">890.00 €</h4>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px] font-[500]">Programmation</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <h4 className="text-red-600 text-[15px] prices">230.00 €</h4>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px] font-[500]">Transport</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-100" />
        <h4 className="text-red-600 text-[15px] prices">19.00 €</h4>
      </div>
    </div>
  );
};

export default PricngPop890;
