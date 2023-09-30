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
import {
  ClerkIcon,
  JavascriptIcon,
  MongoDBIcon,
  NextjsIcon,
  PrismaIcon,
  PythonIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../Shared/icons";

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
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Card>
      <CardHeader className="flex gap-3 min-w-[480px]">
        {Tag.name === "Python" ? <PythonIcon /> : ""}
        {Tag.name === "Javascript" ? <JavascriptIcon /> : ""}
        {Tag.name === "Nextjs" ? <NextjsIcon /> : ""}
        {Tag.name === "Tailwind" ? <TailwindIcon /> : ""}
        {Tag.name === "Prisma" ? <PrismaIcon /> : ""}
        {Tag.name === "Typescript" ? <TypescriptIcon /> : ""}
        {Tag.name === "MongoDB" ? <MongoDBIcon /> : ""}
        {Tag.name === "Clerk" ? <ClerkIcon /> : ""}
        <div className="flex flex-col">
          <p className="text-md text-start font-semibold text-2xl">
            {capitalizeFirstLetter(CardTitle)}
          </p>
          <p className="text-small text-default-500 text-start">{Tag.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="w-full">
        {isReading ? (
          <p>{content}</p>
        ) : (
          <p>{capitalizeFirstLetter(content.slice(0, 200))}</p>
        )}
      </CardBody>
      <Divider />
      {isEditing ? (
        <CardFooter className="flex justify-end">
          <ButtonAction id={id} />
        </CardFooter>
      ) : (
        <CardFooter>
          <Link
            href={`/root/blog/${id}`}
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
