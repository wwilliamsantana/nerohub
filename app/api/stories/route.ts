import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/stories — listar todas as histórias
export async function GET() {
  try {
    const stories = await prisma.story.findMany({
      include: {
        author: { select: { name: true } },
        tags: { include: { tag: true } },
        ratings: { select: { value: true } },
        _count: { select: { savedBy: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const mapped = stories.map((story) => {
      const avgRating =
        story.ratings.length > 0
          ? story.ratings.reduce((acc, r) => acc + r.value, 0) /
            story.ratings.length
          : 0;

      return {
        id: story.id,
        title: story.title,
        content: story.content,
        authorId: story.authorId,
        authorName: story.author.name,
        rating: Math.round(avgRating * 10) / 10,
        saves: story._count.savedBy,
        tags: story.tags.map((st) => st.tag.name),
        createdAt: story.createdAt.toISOString(),
      };
    });

    return NextResponse.json(mapped);
  } catch (error) {
    console.error("Erro ao buscar histórias:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

// POST /api/stories — criar uma nova história
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { title, content, tags } = await request.json();

    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json(
        { error: "Título e conteúdo são obrigatórios" },
        { status: 400 },
      );
    }

    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return NextResponse.json(
        { error: "Selecione pelo menos uma tag" },
        { status: 400 },
      );
    }

    // Criar ou buscar tags
    const tagRecords = await Promise.all(
      tags.map(async (tagName: string) => {
        return prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { name: tagName },
        });
      }),
    );

    const story = await prisma.story.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        authorId: session.user.id,
        tags: {
          create: tagRecords.map((tag) => ({
            tagId: tag.id,
          })),
        },
      },
      include: {
        author: { select: { name: true } },
        tags: { include: { tag: true } },
        ratings: { select: { value: true } },
        _count: { select: { savedBy: true } },
      },
    });

    return NextResponse.json(
      {
        id: story.id,
        title: story.title,
        content: story.content,
        authorId: story.authorId,
        authorName: story.author.name,
        rating: 0,
        saves: 0,
        tags: story.tags.map((st) => st.tag.name),
        createdAt: story.createdAt.toISOString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro ao criar história:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
