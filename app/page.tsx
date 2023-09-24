import PostCard from "@/components/Posts/PostCard";
import { title, subtitle } from "@/components/Shared/primitives";
import { db } from "@/lib/prismadb";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      Tag: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Blog com&nbsp;</h1>
        <h1 className={title({ color: "yellow" })}>NEXT.JS 13.4&nbsp;</h1>
        <br />
        <h1 className={title()}>Aplicação CRUD</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Criado para fins educacionais.
        </h2>
      </div>
      <div className="gap-4 pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            post={post}
            isEditing={false}
            id={post.id}
            isReading={false}
          />
        ))}
      </div>
    </section>
  );
}
