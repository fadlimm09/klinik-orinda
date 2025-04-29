import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { senderId, receiverId, content } = await req.json();

    const message = await prisma.message.create({
      data: {
        content,
        senderId,
        receiverId,
      },
    });

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { senderId } = await req.json();
    const messages = await prisma.message.findMany({
      where: { senderId },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return NextResponse.json({ error: "Failed to retrieve messages" }, { status: 500 });
  }
}
