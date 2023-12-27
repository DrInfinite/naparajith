"use client";

import { sendEmail } from "@/actions/send-email";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  Strong,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function ContactForm() {
  const { pending } = useFormStatus();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card variant="classic" className="p-4">
          <Flex gap={"9"} align={"center"}>
            <EnvelopeClosedIcon width={36} height={36} />
            <Flex direction={"column"}>
              <Heading>
                Get in Touch <Badge color="orange">In progress</Badge>
              </Heading>
              <Text>Drop a mail and let&apos;s connect!</Text>
            </Flex>
          </Flex>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Contact Me</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Get in touch with me through this form or by using the email{" "}
          <Strong>
            <a
              href="mailto:naparajith@duck.com"
              className="hover:underline hover:underline-offset-4"
            >
              naparajith@duck.com
            </a>
          </Strong>
        </Dialog.Description>

        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email<span className="text-red-500">*</span>
              </Text>
              <TextField.Input
                required
                aria-required
                placeholder="Enter your email"
                type="email"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Message<span className="text-red-500">*</span>
              </Text>
              <TextArea placeholder="Send a message" required aria-required />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button color="red">Cancel</Button>
            </Dialog.Close>

            <Button
              disabled={pending}
              type="submit"
              onSubmit={() => console.log("Submitted")}
            >
              {pending ? (
                <>
                  <span className="border-4 border-solid"></span> Sending...
                </>
              ) : (
                "Send"
              )}
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
