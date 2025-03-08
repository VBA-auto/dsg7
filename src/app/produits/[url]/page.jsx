// app/shop/[id]/page.jsx
import ResponsiveSlider from "@/app/Components/ResSlider";
import SizeChart from "@/app/Components/SizeChart";
import RecommendedProducts from "@/app/Components/RecommndProduct";
import CartDrawer from "@/app/Components/CartDrawer";

async function fetchProduct(url) {
  try {
    const res = await fetch("https://codedcotton.vercel.app/products.json");
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
      <div className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-2/3 ms-auto">
            <ResponsiveSlider images={product.gallary} />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Price */}
            <p className="text-2xl font-semibold text-blue-500 mt-4">
              ৳{product.price}
            </p>

            {/* Display Available Sizes */}
            <p className="mt-3 font-semibold">Available Sizes:</p>
            <div className="flex space-x-2 mt-1">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border rounded-md bg-gray-200 text-sm"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Display Available Colors */}
            <p className="mt-3 font-semibold">Available Colors:</p>
            <div className="flex space-x-2 mt-1">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
            </div>

            {/* Material */}
            <p className="mt-3 font-semibold">
              Material:
              <span className="font-normal text-gray-700">
                {" "}
                {product.material}
              </span>
            </p>

            {/* Features */}
            <p className="mt-3 font-semibold">Features:</p>
            <ul className="list-disc list-inside text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="">
              <label
                htmlFor="my-drawer-4"
                className="border px-2 py-2 bg-gray-300 cursor-pointer"
              >
                Add to carts
              </label>
            </div>
            <div className="">
              <SizeChart />
            </div>
          </div>
        </div>

        {/* Pass the product data to the CartDrawer component */}
        <CartDrawer product={product} />

        {/* Recommended Products */}
        <RecommendedProducts currentProductId={url} />
      </div>
    </main>
  );
}
