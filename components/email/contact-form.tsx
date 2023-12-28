"use client";

import { sendEmail } from "@/actions/send-email";
import {
  Root as Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
} from "@radix-ui/react-form";
import {
  Cross1Icon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Card,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Heading,
  IconButton,
  Strong,
  Text,
  TextArea,
  TextFieldInput,
} from "@radix-ui/themes";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function ContactForm() {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Card variant="classic" className="p-4">
          <Flex gap={"9"} align={"center"}>
            <EnvelopeClosedIcon width={36} height={36} />
            <Flex direction={"column"}>
              <Heading>
                Get in Touch <Badge color="blue">Updated</Badge>
              </Heading>
              <Text>Drop a mail and let&apos;s connect!</Text>
            </Flex>
          </Flex>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <Flex justify={"between"} align={"baseline"}>
          <DialogTitle>Let&apos;s Connect</DialogTitle>
          <DialogClose>
            <IconButton color="red" variant="ghost">
              <Cross1Icon />
            </IconButton>
          </DialogClose>
        </Flex>
        <DialogDescription size={"2"} mb={"4"}>
          Get in touch with me through this form or by using the email{" "}
          <Strong>
            <a
              href="mailto:naparajith@duck.com"
              className="hover:underline hover:underline-offset-4"
              target="_blank"
            >
              naparajith@duck.com
            </a>
          </Strong>
        </DialogDescription>
        <Form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully");
          }}
        >
          <FormField name="senderEmail" autoFocus>
            <Flex direction={"column"} gap={"3"} className="mb-3">
              <Flex align={"baseline"} justify={"between"}>
                <FormLabel>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email<span className="text-red-500">*</span>
                  </Text>
                </FormLabel>
                <FormMessage match={"valueMissing"}>
                  <Text as="div" size="2" mb="1" color="red">
                    Please enter your email
                  </Text>
                </FormMessage>
                <FormMessage match={"typeMismatch"}>
                  <Text as="div" size="2" mb="1" color="red">
                    Please enter a valid email
                  </Text>
                </FormMessage>
              </Flex>
              <FormControl asChild>
                <TextFieldInput
                  maxLength={100}
                  name="senderEmail"
                  placeholder="Your Email"
                  required
                  autoFocus
                  type="email"
                />
              </FormControl>
            </Flex>
          </FormField>
          <FormField name="senderName">
            <Flex direction={"column"} gap={"3"} className="mb-3">
              <Flex align={"baseline"} justify={"between"}>
                <FormLabel>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Name<span className="text-red-500">*</span>
                  </Text>
                </FormLabel>
                <FormMessage match={"valueMissing"}>
                  <Text as="div" size="2" mb="1" color="red">
                    Please enter your name
                  </Text>
                </FormMessage>
              </Flex>
              <FormControl asChild>
                <TextFieldInput
                  maxLength={100}
                  name="senderName"
                  placeholder="Your Name"
                  required
                  type="text"
                />
              </FormControl>
            </Flex>
          </FormField>
          <FormField name="message">
            <Flex direction={"column"} gap={"3"} mb={"5"}>
              <Flex align={"baseline"} justify={"between"}>
                <FormLabel>
                  <Text as="label" size="2" mb="1" weight="bold">
                    Message<span className="text-red-500">*</span>
                  </Text>
                </FormLabel>
                <FormMessage match={"valueMissing"}>
                  <Text as="label" size="2" mb="1" color="red">
                    Please enter a message
                  </Text>
                </FormMessage>
              </Flex>
              <FormControl asChild>
                <TextArea
                  name="message"
                  placeholder="Your message"
                  required
                  maxLength={2500}
                />
              </FormControl>
            </Flex>
          </FormField>
          <Flex gap="3" mt="4" justify="end" align={"center"}>
            <DialogClose>
              <Button variant="soft" color="red">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton />
          </Flex>
        </Form>
      </DialogContent>
    </DialogRoot>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <FormSubmit disabled={pending}>
      <Button disabled={pending}>
        {pending ? (
          <>
            <svg
              aria-hidden="true"
              role="status"
              className="me-1 inline h-4 w-4 animate-spin text-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send{" "}
            <PaperPlaneIcon className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
          </>
        )}
      </Button>
    </FormSubmit>
  );
}
