import { db } from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    const { params } = context;
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could Not Delete Post" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { params } = context;
    const body = await req.json();
    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json({ message: "Update Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could Not Update Post" },
      { status: 500 }
    );
  }
}
export async function GET(req: Request, context: contextProps) {
  try {
    const { params } = context;
    const post = await db.post.findFirst({
      where: {
        id: params.postId,
      },
      include: {
        Tag: true,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could Not Fetch Tags" },
      { status: 500 }
    );
  }
}
