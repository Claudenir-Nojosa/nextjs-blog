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
import ButtonAction from "../Shared/ButtonAction";

interface PostCardProps {
  id: string;
  post: {
    id: string;
    title: string;
    content: string;
    Tag: Tag;
  };
  isEditing: boolean;
  isReading: boolean;
}

const PostCard: FC<PostCardProps> = ({ post, isEditing, isReading }) => {
  const { id, title: CardTitle, content, Tag } = post;
  return (
    <Card>
      <CardHeader className="flex gap-3 min-w-[480px]">
        <Image
          alt="clawncoding logo"
          height={40}
          radius="sm"
          src="https://raw.githubusercontent.com/Claudenir-Nojosa/servidor_estaticos/main/logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-start">{CardTitle}</p>
          <p className="text-small text-default-500 text-start">{Tag.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="w-full">
        {isReading ? <p>{content}</p> : <p>{content.slice(0, 200)}</p>}
      </CardBody>
      <Divider />
      {isEditing ? (
        <CardFooter className="flex justify-end">
          <ButtonAction id={id} />
        </CardFooter>
      ) : (
        <CardFooter>
          <Link
            href={`/blog/${id}`}
            className={title({ color: "yellow", size: "sm" })}
          >
            Saiba mais...
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default PostCard;
