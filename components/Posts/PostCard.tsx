"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { title } from "../Shared/primitives";
import { Tag } from "@prisma/client";
import { FC } from "react";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    Tag: Tag;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { title: CardTitle, content, Tag } = post;
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="clawncoding logo"
          height={40}
          radius="sm"
          src="https://raw.githubusercontent.com/Claudenir-Nojosa/servidor_estaticos/main/logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{CardTitle}</p>
          <p className="text-small text-default-500">{Tag.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href="/blog/1" className={title({ color: "yellow", size: "sm" })}>
          Saiba mais...
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
