"use server";
import { auth, currentUser } from "@clerk/nextjs";

export const getUserId = async () => {
  const user:any = await currentUser();
  const userId = user.id;
  return userId;
};
