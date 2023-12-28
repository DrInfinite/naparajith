import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function EmailTemplate({
  message,
  senderEmail,
  senderName,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                {senderName} wants to connect with you
              </Heading>
              <Text>Message: {message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
