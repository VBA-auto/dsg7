// /app/api/getPendingPosts/route.js
import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("DSG7");

    const posts = await db
      .collection("Forum")
      .find({ visibility: false }) // Only pending posts
      .sort({ createdAt: -1 })
      .toArray();

    const cleanPosts = posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      description: post.description,
      name: post.name,
      createdAt: post.createdAt?.toString(),
    }));

    return Response.json(cleanPosts);
  } catch (err) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
}
