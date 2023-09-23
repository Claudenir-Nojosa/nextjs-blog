import PostContentCard from "@/components/Posts/PostContentCard";
import BackButton from "@/components/Shared/BackButton";

function BlogDetailPage() {
  return (
    <>
      <BackButton goToRootPage={false} />
      <PostContentCard />
    </>
  );
}

export default BlogDetailPage;
