import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge";

export async function POST(_request: NextRequest) {
  const client = new OpenAI();
  await client.chat.completions.create({
    model: "gpt-4-1106-preview",
    n: 1,
    temperature: 0,
    messages: [{ content: "Some query", role: "user" }],
  });
  return NextResponse.json({ message: "All is good here!" }, { status: 200 });
}
