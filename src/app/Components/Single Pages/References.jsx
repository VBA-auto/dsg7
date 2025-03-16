import Link from "next/link";
import Image from "next/image";

const RecommendedProducts = () => {
  // List of product reference codes
  const products = [
    { id: "310321488R", image: "/images/boite.webp" },
    { id: "A2C30743000", image: "/images/boite.webp" },
    { id: "310320749R", image: "/images/boite.webp" },
    { id: "A2C53374830", image: "/images/boite.webp" },
    { id: "A2C30743002", image: "/images/boite.webp" },
    { id: "310320468R", image: "/images/boite.webp" },
    { id: "310321517R", image: "/images/boite.webp" },
  ];

  return (
    <div className="container mx-auto  md:p-4">
      <h2 className="text-2xl font-bold mb-6">RÉFÉRENCES SIMILAIRES</h2>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`https://laboiteautomatique.com/reference/${product.id}`}
            target="_blank"
            passHref
          >
            <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="md:w-32 md:h-32 w-36 h-36 relative">
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
