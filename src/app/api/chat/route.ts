import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, field }: { message: string; field?: string } = await req.json();

    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, field }),
    });

    const data = await res.json();
    
    console.log("🔍 Python se aaya:", JSON.stringify(data)); // ← yeh add kiya

    return NextResponse.json({ reply: data.answer });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { reply: "Error: AI service not working" },
      { status: 500 }
    );
  }
}