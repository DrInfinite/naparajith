import { Badge } from "@/components/ui/badge";
import {
  DownloadIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  ReaderIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import React from "react";

export const linktree: {
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
    icon: <LinkedInLogoIcon width={36} height={36} />,
    heading: "LinkedIn",
    text: "My Professional World",
    href: "https://www.linkedin.com/in/naparajith/",
  },
  {
    icon: <GlobeIcon width={36} height={36} />,
    heading: (
      <>
        Portfolio <Badge>Coming Soon</Badge>
      </>
    ),
    text: "My work and skills",
  },
  {
    icon: <ReaderIcon width={36} height={36} />,
    heading: (
      <>
        Blog <Badge>Coming Soon</Badge>
      </>
    ),
    text: "My writings and content",
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
