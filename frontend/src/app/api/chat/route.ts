import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, field }: { message: string; field?: string } = await req.json();

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    const res = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, field }),
    });

    const data = await res.json();
    return NextResponse.json({ reply: data.answer });

  } catch (error) {
    return NextResponse.json(
      { reply: "Error: AI service not working" },
      { status: 500 }
    );
  }
}