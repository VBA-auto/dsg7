import clientPromise from "@/app/lib/mongodb";

export async function GET(req) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("VBA-laboiteautomatique-DB");

    // Fetch data from the `carsModel` collection
    const cars = await db.collection("carsModel").find().toArray();

    // Return the data as JSON
    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch cars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
