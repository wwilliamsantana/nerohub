import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/stories/[id]/rate — dar nota a uma história
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
    const { value } = await request.json();

    if (!value || value < 1 || value > 5 || !Number.isInteger(value)) {
      return NextResponse.json(
        { error: "A nota deve ser um número inteiro de 1 a 5" },
        { status: 400 },
      );
    }

    const story = await prisma.story.findUnique({ where: { id: storyId } });
    if (!story) {
      return NextResponse.json(
        { error: "História não encontrada" },
        { status: 404 },
      );
    }

    // Não pode avaliar a própria história
    if (story.authorId === session.user.id) {
      return NextResponse.json(
        { error: "Você não pode avaliar sua própria história" },
        { status: 403 },
      );
    }

    await prisma.rating.upsert({
      where: {
        userId_storyId: {
          userId: session.user.id,
          storyId,
        },
      },
      update: { value },
      create: {
        userId: session.user.id,
        storyId,
        value,
      },
    });

    // Retorna a nova média
    const ratings = await prisma.rating.findMany({
      where: { storyId },
      select: { value: true },
    });

    const avgRating =
      ratings.reduce((acc, r) => acc + r.value, 0) / ratings.length;

    return NextResponse.json({
      rating: Math.round(avgRating * 10) / 10,
      totalRatings: ratings.length,
      userRating: value,
    });
  } catch (error) {
    console.error("Erro ao avaliar história:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
