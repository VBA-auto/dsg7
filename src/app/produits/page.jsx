// app/shop/page.jsx
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

async function fetchProducts() {
  try {
    const res = await fetch("https://dsg7.fr/products.json", {
      cache: "no-cache",
    });
    // try {
    //   const res = await fetch("http://localhost:3000/products.json", {
    //     cache: "force-cache",
    //   });
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ShopPage() {
  const pageDescription =
    "Calculateur Renault, Calculateur DSG7, Mécatronique DQ200, Calculateur DQ381";
  const HeadingText =
    "BOITE EDC Renault DC4 (H2 A2C30743000 / H2 A2C53374830/ H2 310321488R";
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto py-12 px-5 md:px-0">
      <Head>
        <title>Calculateur Reanult et calculateur DSG7</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="sr-only">
        <h1>
          BOITE EDC Renault DC4 H2 A2C30743000 / H2 A2C53374830/ H2 310321488R
        </h1>
        <h1>Mécatronique DSG7</h1>
        <h1>Calculateur DSG7</h1>
        <h1>Calculateur DQ381</h1>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
        Retrouvez nous produits
      </h1>

      <div className="text-center mb-8">
        <p className="text-gray-900 font-[600] max-w-2xl  mx-auto">
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
                  height={300}
                  src={product.image[0]}
                  alt={product.title}
                  className="border w-[400px]  mx-auto hover:opacity-80 transition-opacity duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 bg-opacity-50">
                  <span className="text-white text-center text-lg font-semibold">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-white mb-2">€{product.price}</p>
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-4 border-t text-center border-gray-300">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <Link
                href={`/produits/${product.url}`}
                className="text-sm font-bold text-center uppercase tracking-wider px-8 py-2 text-white duration-300 rounded bg-gradient-to-r from-red-500 to-red-500 shadow-lg hover:shadow-xl shadow-[#6B8375]/50 hover:scale-105 transition-all"
              >
                <span>Voir plus</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Pourquoi choisir nos produits
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Garantie constructeur</h3>
            <p>1 an de garantie étendu à 2 ans pour le neuf</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Livraison rapide</h3>
            <p>24:00 à 48:00 pour la France</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Aide en ligne</h3>
            <p>
              Par telephone ou en ligne:{" "}
              <Link href="/aide-en-ligne" className="text-red-500 underline">
                Aide
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
