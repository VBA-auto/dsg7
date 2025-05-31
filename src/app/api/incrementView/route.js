import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const { postId } = await req.json();

    if (!postId) {
      return new Response(JSON.stringify({ error: "Missing postId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const db = client.db("DSG7");

    await db
      .collection("Forum")
      .updateOne({ _id: new ObjectId(postId) }, { $inc: { views: 1 } });

    return new Response(JSON.stringify({ message: "View count incremented" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
