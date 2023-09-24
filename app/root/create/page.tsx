"use client";

import FormPost from "@/components/Form/FormPost";
import BackButton from "@/components/Shared/BackButton";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";

const FormInputPostSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(20),
  // Outras validações podem ser adicionadas conforme necessário
});

export default function CreatePage() {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = async (data) => {
    try {
      FormInputPostSchema.parse(data);
      await createPost(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Erro de validação:", error.format());
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  };

  const { mutate: createPost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <BackButton goToRootPage={true} />
      <FormPost
        submit={handleCreatePost}
        isEditing={false}
        isLoadingSubmit={isLoadingSubmit}
      />
    </div>
  );
}
