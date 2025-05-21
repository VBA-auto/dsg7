// app/api/forumPost/route.js

import clientPromise from "@/app/lib/mongodb";

// === Helper Function ===
async function preparePostData(data, db) {
  const seoMetaTitle = `${data.title} | Forum`;
  const seoMetaDescription = data.description.slice(0, 150) + "...";

  const tags = generateTags(data);
  const relatedPosts = await findRelatedPosts(data, db);

  return {
    ...data,
    seoMetaTitle,
    seoMetaDescription,
    tags,
    relatedPosts,
    createdAt: new Date().toISOString(),
    visibility: true,
    comments: [],
    likes: 0,
  };
}

// === Dummy Tag Generator ===
function generateTags(data) {
  const tags = [];
  if (data.category) tags.push(data.category.toLowerCase());
  if (data.features && Array.isArray(data.features)) {
    tags.push(...data.features.map((f) => f.toLowerCase()));
  }
  return tags;
}

// === Related Post Finder (category match) ===
async function findRelatedPosts(data, db) {
  const posts = await db
    .collection("Forum")
    .find({ category: data.category })
    .limit(5)
    .toArray();
  return posts.map((p) => p._id);
}

// === API Route Handler ===
export async function POST(req) {
  try {
    const formData = await req.json();
    const client = await clientPromise;
    const db = client.db("DSG7");

    // === Enrich post with tags, SEO, etc. ===
    const fullPostData = await preparePostData(formData, db);

    // === Insert into MongoDB ===
    const result = await db.collection("Forum").insertOne(fullPostData);

    if (result.acknowledged) {
      return new Response(
        JSON.stringify({ message: "Forum post added successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to add forum post" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Forum post API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
