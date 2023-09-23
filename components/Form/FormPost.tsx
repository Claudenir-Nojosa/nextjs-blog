"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { title } from "@/components/Shared/primitives";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  // fetch list tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });
  console.log(dataTags);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3 justify-center">
          <h1 className={title({ color: "yellow" })}>
            {isEditing ? "Editar Publicação" : "Criar Publicação"}
          </h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-5">
          <Input
            type="text"
            label="Titulo"
            placeholder="Titulo do Post"
            labelPlacement="outside"
            {...register("title")}
          />
          <Textarea
            label="Conteúdo"
            labelPlacement="outside"
            placeholder="Conteúdo do Post"
            className="max-w-xs"
            {...register("content")}
          />
          {isLoadingTags ? (
            <div className="justify-center flex items-center text-center">
              <span className="loading loading-infinity loading-md "></span>
            </div>
          ) : (
            <Select
              label="Categoria"
              placeholder="Selecione uma categoria"
              className="max-w-xs"
              {...register("tagId")}
            >
              {dataTags?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
          )}
        </CardBody>
        <CardFooter>
          <Button
            type="submit"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
          >
            {isEditing ? "Alterar" : "Criar"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default FormPost;
