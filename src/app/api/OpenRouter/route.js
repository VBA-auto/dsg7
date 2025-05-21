// For Next.js 13+ (App Router)

export async function POST(req) {
  const { title } = await req.json();

  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant that creates realistic car forum posts. Detect the input language. Respond in that language.",
    },
    {
      role: "user",
      content: `Create a forum post based on this title: "${title}"

Return a JSON object like this:
{
  "name": "Realistic user name",
  "description": "Forum-style description, 250-300 words"
}`,
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

    const match = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match?.[0]);

    return new Response(JSON.stringify(parsed), { status: 200 });
  } catch (err) {
    console.error("OpenRouter error:", err);
    return new Response(JSON.stringify({ error: "OpenRouter failed." }), {
      status: 500,
    });
  }
}
