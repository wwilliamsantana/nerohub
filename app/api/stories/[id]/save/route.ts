import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/stories/[id]/save — salvar/dessalvar história
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id: storyId } = await params;

    const story = await prisma.story.findUnique({ where: { id: storyId } });
    if (!story) {
      return NextResponse.json(
        { error: "História não encontrada" },
        { status: 404 },
      );
    }

    const existing = await prisma.savedStory.findUnique({
      where: {
        userId_storyId: {
          userId: session.user.id,
          storyId,
        },
      },
    });

    if (existing) {
      await prisma.savedStory.delete({
        where: {
          userId_storyId: {
            userId: session.user.id,
            storyId,
          },
        },
      });

      return NextResponse.json({ saved: false });
    } else {
      await prisma.savedStory.create({
        data: {
          userId: session.user.id,
          storyId,
        },
      });

      return NextResponse.json({ saved: true });
    }
  } catch (error) {
    console.error("Erro ao salvar história:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
