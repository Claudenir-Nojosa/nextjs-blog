"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { title } from "../Shared/primitives";

export default function PostCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://raw.githubusercontent.com/Claudenir-Nojosa/servidor_estaticos/main/logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Título</p>
          <p className="text-small text-default-500">Descrição</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non eum
          obcaecati perspiciatis iure neque. Maxime corporis corrupti adipisci,
          recusandae dolorum, pariatur molestias, doloribus necessitatibus
          aperiam facere odit ratione eligendi.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href="/blog/1" className={title({color: 'yellow', size: 'sm'})}>Saiba mais...</Link>
      </CardFooter>
    </Card>
  );
}
