// For Next.js 13+ App Router (route.js)
export async function POST(req) {
  const { title } = await req.json();

  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant that creates realistic car forum posts . Detect the input language and respond in that language only.",
    },
    {
      role: "user",
      content: `Create a forum post based on this title: "${title}"

Return a JSON object like this:
{
  "name": "Realistic user name",
  "description": "Forum-style description, 350-400 words",
  "comments": [
    {
      "author": "Commenter Name",
      "email": "commenter@email.com",
      "text": "This is a thoughtful comment on the post topic.",
      "timestamp": "ISO timestamp format like 2025-05-22T14:30:00Z And year should be 2025 and diffrent date for each comment."
    }
    // Include a total of 4 to 5 such comments
  ]
}

Respond ONLY with valid JSON. Do not include explanations or extra text.`,
    },
  ];

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_OPENROUTER_API_SECRET}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages,
        }),
      }
    );

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";

    // Try to extract only the JSON part from the response
    const match = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match?.[0]);

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("OpenRouter error:", err);
    return new Response(JSON.stringify({ error: "OpenRouter failed." }), {
      status: 500,
    });
  }
}
