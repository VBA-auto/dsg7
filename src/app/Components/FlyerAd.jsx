import Image from "next/image";

export default function FlyerAd() {
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden sticky top-20 z-50">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>

      <div className="relative p-6 z-10">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          🛠 Produit en vedette
        </h3>
        <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
          <Image
            src="/images/cal-normal-1.webp" // Use your uploaded image here
            alt="Calculateur Boîte Auto EDC"
            width={400}
            height={160}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
        <h4 className="text-md font-semibold text-gray-700">
          Calculateur EDC Renault
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          Remplacez votre calculateur défectueux en toute confiance. 100%
          compatible avec Captur, Clio IV, Mégane III.
        </p>
        <a
          href="https://laboiteautomatique.com/"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-red-600 transition"
        >
          Voir le produit
        </a>
      </div>
    </div>
  );
}
