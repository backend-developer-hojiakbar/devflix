import { toast } from "sonner";

export function useToast() {
  return {
    toast: (content: string) => {
      return toast({
        children: content
      });
    }
  };
}
