import { useMutation } from "@tanstack/react-query";
import { sendEmailApi } from "../services/apiEmail";
import toast from "react-hot-toast";

export function useEmail() {
  const mutation = useMutation({
    mutationFn: sendEmailApi,
    onSuccess: () => {
      toast.success("Message sent successfully ");
    },
    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Message not sent! ");
    },
  });

  const { mutate: sendEmail, isPending: isLoading } = mutation;

  return { sendEmail, isLoading };
}
