"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { subtitle, title } from "../Shared/primitives";
import ButtonAction from "../Shared/ButtonAction";

export default function PostContentCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 justify-center">
        <h2 className={title({ color: "yellow" })}>Post One</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className={subtitle()}>Post One Content</p>
      </CardBody>
      <CardFooter className="flex justify-end">
        <ButtonAction />
      </CardFooter>
    </Card>
  );
}
