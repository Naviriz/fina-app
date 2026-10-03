import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export default function ChatbotTextarea() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    form.reset();
  }
  return (
    <form className="flex flex-col p-2 bg-secondary rounded-2xl">
      <Controller
        control={form.control}
        name="message"
        render={({ field, fieldState }) => (
          <Field>
            <textarea
              {...field}
              id="form-message"
              placeholder="ASK AI Hihihi here"
              autoComplete="off"
              className="h-16 px-3 py-2 rounded-md resize-none focus:outline-none"
            />
          </Field>
        )}
      />
      <div className="flex justify-between">
        <div></div>
        <div>
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="text-primary hover:bg-primary/10 hover:text-primary cursor-pointer disabled:bg-transparent"
          >
            <SendIcon className="size-5"></SendIcon>
          </Button>
        </div>
      </div>
    </form>
  );
}
