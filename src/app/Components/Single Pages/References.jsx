import Link from "next/link";
import Image from "next/image";

const RecommendedProducts = () => {
  // List of product reference codes
  const products = [
    { id: "310321488R", image: "/images/cal-normal-1.webp" },
    { id: "A2C30743000", image: "/images/cal-normal-1.webp" },
    { id: "310320749R", image: "/images/cal-normal-1.webp" },
    { id: "A2C53374830", image: "/images/cal-normal-1.webp" },
    { id: "A2C30743002", image: "/images/cal-normal-1.webp" },
    { id: "310320468R", image: "/images/cal-normal-1.webp" },
    { id: "310321517R", image: "/images/cal-normal-1.webp" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">MOST COMMON REFERENCES</h2>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`https://laboiteautomatique.com/reference/${product.id}`}
            target="_blank"
            passHref
          >
            <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-32 h-32 relative">
                <Image
                  src={product.image}
                  alt={product.id}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{product.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
