import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id: storyId } = await params;

    // Verificar se a história existe e pertence ao usuário
    const story = await prisma.story.findUnique({
      where: { id: storyId },
      select: { authorId: true },
    });

    if (!story) {
      return NextResponse.json(
        { error: "História não encontrada" },
        { status: 404 },
      );
    }

    if (story.authorId !== session.user.id) {
      return NextResponse.json(
        { error: "Você não tem permissão para deletar esta história" },
        { status: 403 },
      );
    }

    // Deletar a história (cascata deleta SavedStory e Rating automaticamente)
    await prisma.story.delete({
      where: { id: storyId },
    });

    return NextResponse.json(
      { message: "História deletada com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao deletar história:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
