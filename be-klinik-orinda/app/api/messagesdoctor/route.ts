import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// app/api/messagesdoctor/route.ts

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "https://klinik-orinda-chat.vercel.app",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT,DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}

export async function POST(req: Request) {
  try {
    const { senderId } = await req.json();
    const messages = await prisma.message.findMany({
      where: { senderId },
    });

    return NextResponse.json(messages, {
      headers: {
        "Access-Control-Allow-Origin": "https://klinik-orinda-chat.vercel.app",
      },
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages, {
      headers: {
        "Access-Control-Allow-Origin": "https://klinik-orinda-chat.vercel.app",
      },
    });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return NextResponse.json({ error: "Failed to retrieve messages" }, { status: 500 });
  }
}
