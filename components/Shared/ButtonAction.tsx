"use client";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { DeleteIcon, EditIcon } from "./icons";



function ButtonAction() {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/edit/1">
        <Button isIconOnly variant="faded" aria-label="Edit">
          <EditIcon />
        </Button>
      </Link>
      <Button isIconOnly color="danger" variant="faded" aria-label="Delete  ">
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default ButtonAction;
