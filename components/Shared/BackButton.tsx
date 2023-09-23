"use client";
import { Button } from "@nextui-org/button";
import { BackIcon } from "./icons";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  goToRootPage: boolean;
};
function BackButton({ goToRootPage }: BackButtonProps) {
  const router = useRouter();
  return (
    <div className="flex justify-start">
      {goToRootPage ? (
        <Button
          onClick={() => router.push("/")}
          isIconOnly
          variant="light"
          color="default"
          aria-label="Back"
        >
          <BackIcon />
        </Button>
      ) : (
        <Button
          onClick={() => router.back()}
          isIconOnly
          variant="light"
          color="default"
          aria-label="Back"
        >
          <BackIcon />
        </Button>
      )}
    </div>
  );
}

export default BackButton;
