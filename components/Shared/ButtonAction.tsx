"use client";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { DeleteIcon, EditIcon } from "./icons";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();
  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
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
    <div className="flex gap-4 items-center">
      <Link href={`/edit/${id}`}>
        <Button isIconOnly variant="bordered" aria-label="Edit">
          <EditIcon />
        </Button>
      </Link>
      {isLoading ? (
        <span className="loading loading-spinner text-error"></span>
      ) : (
        <Button
          isIconOnly
          color="danger"
          variant="bordered"
          aria-label={isLoading ? "Carregando" : "Deletar"}
          onClick={() => deletePost()}
        >
          <DeleteIcon />
        </Button>
      )}
    </div>
  );
};

export default ButtonAction;
