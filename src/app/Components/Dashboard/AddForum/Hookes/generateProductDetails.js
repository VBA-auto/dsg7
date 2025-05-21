export async function generateProductDetails({ name }) {
  const response = await fetch("/api/OpenRouter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }), // only send name
  });

  const data = await response.json();
  return { data, ok: response.ok };
}
