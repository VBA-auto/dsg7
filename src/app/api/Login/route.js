// app/api/login/route.js

import clientPromise from "@/app/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("DSG7");

    // Find user
    const user = await db.collection("Auth").findOne({ email, pass: password });

    if (user) {
      // Create session token
      const sessionToken = uuidv4();
      const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days

      // Store session in database
      await db.collection("Sessions").insertOne({
        userId: user._id,
        sessionToken,
        expiresAt,
        createdAt: new Date(),
      });

      return new Response(
        JSON.stringify({
          success: true,
          sessionToken,
          expiresAt: expiresAt.getTime(),
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Add this new API route for session validation
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionToken = searchParams.get("token");

    if (!sessionToken) {
      return new Response(JSON.stringify({ valid: false }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const db = client.db("DSG7");

    const session = await db.collection("Sessions").findOne({
      sessionToken,
      expiresAt: { $gt: new Date() },
    });

    return new Response(
      JSON.stringify({
        valid: !!session,
        expiresAt: session?.expiresAt?.getTime(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ valid: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
