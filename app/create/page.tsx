"use client";

import FormPost from "@/components/Form/FormPost";
import BackButton from "@/components/Shared/BackButton";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function CreatePage() {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton goToRootPage={true} />
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
