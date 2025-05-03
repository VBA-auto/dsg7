"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const AideenLigneSearch = () => {
  const MAX_RESULTS = 20;
  const [codesData, setCodesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCodes, setFilteredCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const [activeCode, setActiveCode] = useState(null);

  const [ICI, setIci] = useState(false);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/errorCodes.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCodesData(data);
      } catch (error) {
        console.error("Failed to fetch error codes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle outside click to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount or when isSearchOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = (searchTerm) => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();
    setLoading(true);

    // Exact matches come first
    const exactMatches = codesData.filter(
      (code) => code.code.toLowerCase() === searchTermLowerCase
    );

    // Partial matches after exact matches
    const partialMatches = codesData.filter(
      (code) =>
        code.code.toLowerCase().includes(searchTermLowerCase) ||
        code.description.toLowerCase().includes(searchTermLowerCase)
    );

    const combinedResults = [...exactMatches, ...partialMatches];

    const uniqueResults = Array.from(
      new Map(combinedResults.map((item) => [item.code, item])).values()
    );

    const sortedResults = uniqueResults.slice(0, MAX_RESULTS);

    setFilteredCodes(sortedResults);
    setLoading(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    handleSearch(searchValue);
    setIsSearchOpen(true);
  };

  const handleToggleHelp = (code) => {
    // Toggle the specific help section based on the clicked code
    setActiveCode((prevCode) => (prevCode === code ? null : code));
  };

  const highlightMatch = (text, match) => {
    const regex = new RegExp(`(${match})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === match.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="search-component" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Veuillez saisir ici votre code défaut ou la description"
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setIsSearchOpen(true)}
          className="w-full py-3 px-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        {/* Loader */}
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-5 h-5 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {isSearchOpen && (
        <div className="search-results mt-5">
          {filteredCodes.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md md:h-[292px] overflow-y-auto">
              {filteredCodes.map((code, index) => (
                <div
                  key={`${code?.code}-${index}`}
                  className="p-3 border-b border-gray-200"
                >
                  <p className="font-bold text-[15px] text-black">
                    {code?.code}
                  </p>
                  <p className="text-[14px] my-2 text-black">
                    {highlightMatch(code?.description, searchTerm)}
                  </p>
                  <h6 className="italic text-[16px] mb-2 text-gray-500">
                    {code?.subTitle}
                  </h6>
                  <p className="text-[14px] my-2 text-black">
                    Cliquer{" "}
                    <button
                      onClick={() => handleToggleHelp(code.code)}
                      className="text-red-500 underline"
                    >
                      ici
                    </button>{" "}
                    pour obtenir de l&apos;aide
                  </p>
                  {/* Show help text if this code is active */}
                  {activeCode === code.code && (
                    <p className="text-red-500 text-[14px]">{code?.aide}</p>
                  )}
                  <div className="my-4">
                    <Link
                      href="/contact"
                      className="px-2 py-2 text-[14px] border border-red-500 rounded-md text-red-500 hover:text-red-600"
                    >
                      Contactez-nous
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm ? (
            <div className="bg-white rounded-lg shadow-md p-5">
              <p className="text-black  text-[14px]">CODE DÉFAUT INCONNU</p>
              <p className="text-black  text-[14px]">
                Le code défaut saisi est inconnu
              </p>
              <p className="text-black  text-[14px]">
                Pour plus d&apos;informations, merci de nous contacter
              </p>
              <div className="my-4">
                <Link
                  href="/contact"
                  className="px-2 py-2 text-[14px] border border-red-500 rounded-md text-red-500 hover:bg-[#fff] hover:text-white"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-red-500 bg-white rounded-md px-2   text-[14px]">
              Commencer à saisir les informations (codes ou autre)…
            </p>
          )}
        </div>
      )}

      {isSearchOpen ? (
        ""
      ) : (
        <div className=" text-red-500 bg-white rounded-md px-2 mt-5 italic text-[14px]">
          <p>* Codes défault a titre indicatif uniquement</p>
        </div>
      )}
    </div>
  );
};

export default AideenLigneSearch;
