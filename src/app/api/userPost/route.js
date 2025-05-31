import clientPromise from "@/app/lib/mongodb";

// === Prepare post ===
function prepareUserPost(data) {
  const seoMetaTitle = `${data.title} | Forum`;
  const seoMetaDescription = data.description.slice(0, 150) + "...";
  const tags = [];

  if (data.category) tags.push(data.category.toLowerCase());
  if (data.features && Array.isArray(data.features)) {
    tags.push(...data.features.map((f) => f.toLowerCase()));
  }

  return {
    ...data,
    seoMetaTitle,
    seoMetaDescription,
    tags,
    relatedPosts: [],
    createdAt: new Date().toISOString(),
    visibility: false,
    comments: [],
    likes: 0,
  };
}

export async function POST(req) {
  try {
    const formData = await req.json();
    const client = await clientPromise;
    const db = client.db("DSG7");

    const fullPostData = prepareUserPost(formData);

    const result = await db.collection("Forum").insertOne(fullPostData);

    if (result.acknowledged) {
      return new Response(
        JSON.stringify({ message: "Your post is submitted for review!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(JSON.stringify({ error: "Failed to submit post" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("User post API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
