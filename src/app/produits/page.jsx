// app/shop/page.jsx
import Link from "next/link";
import Image from "next/image";

async function fetchProducts() {
  try {
    const res = await fetch("https://dsg7.vercel.app/products.json", {
      cache: "force-cache",
    });
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-5xl font-bold text-center mb-2">
        Retrouvez nous produits
      </h1>

      <div className="text-center mb-8">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ci-dessous l'ensemble de nos produits détaillés & garantie
          constructeur
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg border border-gray-300 group overflow-hidden"
          >
            <Link href={`/produits/${product.url}`}>
              <div className="relative">
                <Image
                  width={700}
                  height={600}
                  src={product.image}
                  alt={product.title}
                  className="w-full border h-[240px]  mx-auto hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 bg-opacity-50">
                  <span className="text-white text-lg font-semibold">
                    See Details
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-4 border-t border-gray-300">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 mb-5">${product.price}</p>
              <Link
                href={`/produits/${product.url}`}
                className="text-sm font-bold text-center uppercase tracking-wider px-8 py-2 text-white duration-300 rounded bg-gradient-to-r from-red-600 to-red-600 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
              >
                <span>See More</span>
              </Link>
            </div>
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
