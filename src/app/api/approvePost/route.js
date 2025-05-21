// /app/api/approvePost/route.js
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(req) {
  const { id } = await req.json();

  if (!id) {
    return new Response("Missing post ID", { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("DSG7");

    const result = await db
      .collection("Forum")
      .updateOne({ _id: new ObjectId(id) }, { $set: { visibility: true } });

    return Response.json({
      success: true,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    return new Response("Error approving post", { status: 500 });
  }
}
