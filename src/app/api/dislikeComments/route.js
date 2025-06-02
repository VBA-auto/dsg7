import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const { postId, commentId } = await req.json();

    if (!postId || !commentId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("DSG7");

    const result = await db.collection("Forum").updateOne(
      { 
        _id: new ObjectId(postId),
        "comments.id": commentId
      },
      { $inc: { "comments.$.dislikes": 1 } }
    );

    if (result.modifiedCount === 1) {
      return new Response(
        JSON.stringify({ message: "Comment disliked successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Post or comment not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Dislike comment error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}