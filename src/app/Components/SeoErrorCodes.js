async function fetchProducts() {
  try {
    const res = await fetch("https://laboiteautomatique.com/errorCodes.json", {
      cache: "force-cache",
    });
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function SEOErrorCodes() {
  const products = await fetchProducts();

  if (!products) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <main>
      <div className="sr-only">
        <h1>Error Codes for SEO</h1>
        <ul>
          {products.map((code, index) => (
            <li key={`${code.code}-${index}`}>
              <h2>{code.code}</h2>
              <p>{code.description}</p>
              <p>{code.subTitle}</p>
              <p>{code.aide}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
