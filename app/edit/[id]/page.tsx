"use client";

import FormPost from "@/components/Form/FormPost";
import BackButton from "@/components/Shared/BackButton";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function EditPostPage() {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton goToRootPage={false} />
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
}
