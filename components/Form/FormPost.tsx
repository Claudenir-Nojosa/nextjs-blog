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
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function FormPost() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 justify-center">
        <h1 className={title({ color: "yellow" })}>Criar Publicação</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex gap-5">
        <Input
          type="text"
          label="Titulo"
          placeholder="Titulo do Post"
          labelPlacement="outside"
        />
        <Textarea
          label="Conteúdo"
          labelPlacement="outside"
          placeholder="Conteúdo do Post"
          className="max-w-xs"
        />
        <Select
          label="Categoria"
          placeholder="Selecione uma categoria"
          className="max-w-xs"
        >
          {siteConfig.selectTypes.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </CardBody>
      <CardFooter>
        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full">
          Criar
        </Button>
      </CardFooter>
    </Card>
  );
}
