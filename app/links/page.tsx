import ContactForm from "@/components/email/contact-form";
import Linktree from "@/components/linktree";
import profile from "@/public/Profile.jpg";
import {
  DownloadIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Card,
  Code,
  Container,
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
    icon: <GlobeIcon width={36} height={36} />,
    heading: (
      <>
        Portfolio <Badge color="orange">In progress</Badge>
      </>
    ),
    text: "My work and skills",
  },
  {
    icon: <DownloadIcon width={36} height={36} />,
    heading: "Résumé",
    text: "My Profile",
    href: "https://flowcv.com/resume/mdrssqq018",
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
              <Em>Technical Intern</Em> &rarr; AT&T
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
      <ContactForm />
    </Flex>
  );
}
