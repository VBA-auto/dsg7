import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const { postId, author, email, text } = await req.json();

    if (!postId || !author || !email || !text) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("DSG7");

    const comment = {
      id: Date.now(),
      author,
      email,
      text,
      timestamp: new Date().toISOString(),
      likes: 0,
    };

    const result = await db.collection("Forum").updateOne(
      { _id: new ObjectId(postId) }, // Convert postId string to MongoDB ObjectId
      { $push: { comments: comment } }
    );

    if (result.modifiedCount === 1) {
      return new Response(
        JSON.stringify({ message: "Comment added successfully", comment }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Post not found or comment not added" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Add comment error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
