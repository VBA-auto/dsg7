// app/shop/page.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import useProducts from "../Components/Hookes/useProducts";

export default function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Our Top Collection
      </h1>

      <div className="text-center mb-8">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked collection of premium products. Each item is
          carefully selected to ensure the highest quality and style for our
          valued customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg group overflow-hidden"
          >
            <Link href={`/shop/${product.url}`}>
              <div className="relative">
                <Image
                  width={700}
                  height={600}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] object-cover mx-auto hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 bg-opacity-50">
                  <span className="text-white text-lg font-semibold">
                    See Details
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our Products?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Premium Quality</h3>
            <p>Guaranteed high-quality materials and craftsmanship</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Fast Delivery</h3>
            <p>Quick and reliable shipping across Bangladesh</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Customer Satisfaction</h3>
            <p>100% satisfaction guaranteed with our products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
