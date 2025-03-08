// app/shop/[id]/page.jsx
import Image from "next/image";

async function fetchProduct(url) {
  try {
    const res = await fetch("https://dsg7.vercel.app/products.json", {
      cache: "force-cache",
    });
    const products = await res.json();
    const product = products.find((p) => p.url === url);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const { url } = await params;
  const product = await fetchProduct(url);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <main>
      <div className="max-w-7xl mx-auto mt-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-2/3 ms-auto">
            <Image width={600} height={500} src={product.image} alt="sd" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Price */}
            <p className="text-2xl font-semibold text-blue-500 mt-4">
              {product.price}
            </p>
            <div className="mt-5">
              <label
                htmlFor="my-drawer-4"
                className="border px-2 py-2 bg-gray-300 cursor-pointer"
              >
                Shop Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
