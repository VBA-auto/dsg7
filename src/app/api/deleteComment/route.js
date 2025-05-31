import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  const commentIndex = parseInt(searchParams.get("commentIndex"));

  if (!postId || isNaN(commentIndex)) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("DSG7");

    // Pull comment at specific index
    const result = await db
      .collection("Forum")
      .updateOne(
        { _id: new ObjectId(postId) },
        { $unset: { [`comments.${commentIndex}`]: 1 } }
      );
    await db
      .collection("Forum")
      .updateOne({ _id: new ObjectId(postId) }, { $pull: { comments: null } });

    return new Response(JSON.stringify({ message: "Comment deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Comment delete error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
