import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing ID" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("DSG7");

    const result = await db
      .collection("Forum")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return new Response(JSON.stringify({ message: "Post deleted" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
