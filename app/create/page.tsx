"use client";

import FormPost from "@/components/Form/FormPost";
import BackButton from "@/components/Shared/BackButton";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

export default function CreatePage() {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  return (
    <div>
      <BackButton goToRootPage={true} />
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
