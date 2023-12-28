import Form from "@/components/email/contact-form";
import Linktree from "@/components/linktree";
import {
  DownloadIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  ReaderIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Card,
  Code,
  Em,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";

const linktree: {
  icon: React.ReactNode;
  heading: React.ReactNode;
  text: React.ReactNode;
  href?: string | undefined;
}[] = [
  {
    icon: <DownloadIcon width={36} height={36} />,
    heading: "Résumé",
    text: "My Profile",
    href: "https://flowcv.com/resume/mdrssqq018",
  },
  {
    icon: <GlobeIcon width={36} height={36} />,
    heading: (
      <>
        Portfolio{" "}
        <Badge color="orange">
          <svg
            aria-hidden="true"
            role="status"
            className="me-1 inline h-4 w-4 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
              className="opacity-25"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Coming Soon
        </Badge>
      </>
    ),
    text: "My work and skills",
  },
  {
    icon: <ReaderIcon width={36} height={36} />,
    heading: (
      <>
        Blog{" "}
        <Badge color="orange">
          <svg
            aria-hidden="true"
            role="status"
            className="me-1 inline h-4 w-4 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
              className="opacity-25"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Coming Soon
        </Badge>
      </>
    ),
    text: "My work and skills",
  },
  {
    icon: <LinkedInLogoIcon width={36} height={36} />,
    heading: "LinkedIn",
    text: "My Professional World",
    href: "https://www.linkedin.com/in/naparajith/",
  },
  {
    icon: <GitHubLogoIcon width={36} height={36} />,
    heading: "GitHub",
    text: "My Technical Projects",
    href: "https://github.com/DrInfinite",
  },
  {
    icon: <VideoIcon width={36} height={36} />,
    heading: "TEDx Talk",
    text: "Welcome to my TEDx Talk",
    href: "https://youtu.be/gxD2oiEuq80?si=A8c0KJ4TBsLvX77-",
  },
];

export default function Links() {
  return (
    <Flex
      direction={"column"}
      py={"9"}
      className="container mx-auto px-4"
      align={"stretch"}
    >
      <Card variant="classic" className="p-4">
        <div className="flex flex-col items-center justify-center gap-4 align-middle sm:flex-row sm:justify-start sm:gap-8">
          <Avatar
            className="scale-90 sm:scale-100"
            size={"9"}
            fallback={"T"}
            radius="full"
            src="https://media.licdn.com/dms/image/D5603AQF1GfwpqkX-cg/profile-displayphoto-shrink_400_400/0/1703668758984?e=2147483647&v=beta&t=HoAtqxUU8uVnKerpJUOKS6ylcEvKFpXkmaKCKOEhzmQ"
          />
          <div className="flex flex-col">
            <Heading className="text-center sm:text-left">
              T L Naparajith
            </Heading>
            <Text className="text-center sm:text-left">
              <Em>Technical Intern</Em> &rarr; AT&T ACSI
            </Text>
            <Text className="text-center sm:text-left">
              <Code>CSE</Code> &rarr; Senior Year Undergrad
            </Text>
          </div>
        </div>
      </Card>
      <br />
      {linktree.map(function (link, index) {
        return (
          <React.Fragment key={index}>
            <Linktree
              icon={link.icon}
              heading={link.heading}
              text={link.text}
              href={link.href}
            />
            <br />
          </React.Fragment>
        );
      })}
      <Separator my="3" size="4" />
      <br />
      <Form />
    </Flex>
  );
}
