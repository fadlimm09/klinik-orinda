import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { senderId } = await req.json();
    const message = await prisma.message.findMany({
      where: {
        senderId: senderId,
      },
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return NextResponse.json({ error: "Failed to retrieve messages" }, { status: 500 });
  }
}
