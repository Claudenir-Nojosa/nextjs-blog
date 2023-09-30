"use client";

import FormPost from "@/components/Form/FormPost";
import BackButton from "@/components/Shared/BackButton";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { getUserId } from "@/lib/getUserId";

const FormInputPostSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(3),
});

export default function CreatePage({ userId }) {
  const { toast } = useToast();
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = async (data) => {
    try {
      FormInputPostSchema.parse(data);
      await createPost({ ...data, userId });
      toast({
        title: "Post criado com sucesso",
        description: "Redirecionando para homepage",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        toast({
          title: "Uh oh! Alguma coisa deu errado.",
          description: "Favor inserir dados válidos.",
        });
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
        userId={userId}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const userId = await getUserId();
  return {
    props: {
      userId,
    },
  };
}
