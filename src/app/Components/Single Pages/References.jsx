import Link from "next/link";
import Image from "next/image";

// Fetch all products from the API
async function fetchProducts() {
  try {
    const res = await fetch("https://dsg7.fr/products.json", {
      cache: "no-cache", // Ensure fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of error
  }
}

export default async function RecommendedProducts({ ref }) {
  // Fetch all products
  const allProducts = await fetchProducts();
  console.log(allProducts);

  // Filter products that have the same category as the current product
  const similarProducts = allProducts.filter((product) => product.ref === ref);
  console.log(similarProducts);
  console.log(ref);

  // If no similar products found, return null or a message
  if (similarProducts.length === 0) {
    return null; // or return <p>No similar products found.</p>;
  }

  return (
    <div className="container mx-auto md:p-4">
      <h2 className="text-2xl font-bold mb-6">RÉFÉRENCES SIMILAIRES</h2>
      <div className="flex flex-wrap gap-4">
        {similarProducts.map((product) => (
          <Link key={product.id} href={`#`} target="_blank" passHref>
            <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="md:w-32 md:h-32 w-36 h-36 relative">
                <Image
                  src={product.image[0]}
                  alt={product.title || product.id} // Use title or ID as alt text
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="mt-2 text-sm font-medium">
                {product.title || product.id}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
