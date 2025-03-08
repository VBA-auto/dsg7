"use client";

import Image from "next/image";
import Link from "next/link";
import BuyButton from "../Buttons/BuyButton";
import useProducts from "../Hookes/useProducts";

export default function FeaturedItems() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-5xl font-bold mb-16">Featured Parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg group overflow-hidden"
          >
            <Link href={`/produits/${product.url}`}>
              <div className="relative">
                <Image
                  width={700}
                  height={600}
                  src={product.image}
                  alt={product.title}
                  className="w-full border border-gray-300 h-[300px] object-cover mx-auto hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 bg-opacity-50">
                  <span className="text-white text-lg font-semibold">
                    See Details
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <BuyButton href="produits" text="All Produits" />
      </div>
    </div>
  );
}
