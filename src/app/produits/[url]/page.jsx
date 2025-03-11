// app/shop/[id]/page.jsx
import DefaultSingle from "@/app/Components/Single Pages/DefaultSingle";
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
      <DefaultSingle product={product} />
    </main>
  );
}
