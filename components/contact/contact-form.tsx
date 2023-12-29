import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { sendEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactFormSchema = z.object({
  senderEmail: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(15, { message: "Email must be at least 15 characters" })
    .max(100, { message: "Email must be at most 100 characters" }),
  senderName: z
    .string()
    .min(5, { message: "Name must be at least 5 characters" })
    .max(100, { message: "Name must be at most 100 characters" }),
  message: z
    .string()
    .min(25, { message: "Message must be at least 25 characters" })
    .max(2500, { message: "Name must be at most 2500 characters" }),
});

export function ContactForm({ open, setOpen }: { open: any; setOpen: any }) {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      senderEmail: "",
      senderName: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    setOpen(!open);
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        action={async () => {
          const { message, senderEmail, senderName } = form.getValues();
          const { data, error } = await sendEmail({
            senderEmail,
            senderName,
            message,
          });

          if (error) {
            toast.error(error);
            return;
          }
          setOpen(!open);

          toast.success("Email sent successfully", {
            description: "I will personally get in touch with you very soon.",
          });
        }}
        className="grid items-start gap-4 px-4 pb-4 md:p-0"
      >
        <FormField
          control={form.control}
          name={"senderEmail"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  maxLength={100}
                  placeholder="Email Address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This email will be used for replies.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"senderName"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input maxLength={100} placeholder="Full Name" {...field} />
              </FormControl>
              <FormDescription>
                The name you wish to share with me.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"message"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  maxLength={2500}
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Drop your message that you wish to convey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <PaperPlaneIcon className="mr-2 h-4 w-4" />
              Send
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
