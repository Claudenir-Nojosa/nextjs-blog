import PostCard from "@/components/Posts/PostCard";
import BackButton from "@/components/Shared/BackButton";
import { db } from "@/lib/prismadb";
import { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true,
    },
    
  });
  return response;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  console.log(post);

  return (
    <>
      <BackButton goToRootPage={false} />
      <PostCard isEditing={true} post={post} id={params.id} isReading={true} />
    </>
  );
};

export default BlogDetailPage;
