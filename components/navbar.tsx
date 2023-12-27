import { DownloadIcon, HandIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

const pages: { href: Url; innerHTML: ReactNode }[] = [
  { href: "/", innerHTML: "Home" },
  { href: "/about", innerHTML: "About" },
  { href: "/projects", innerHTML: "Projects" },
  { href: "/design", innerHTML: "Designs" },
  { href: "/blog", innerHTML: "Blog" },
];

export default function Navbar() {
  return (
    <Flex direction={"row"} justify={"between"} align={"center"} p={"4"}>
      <Heading weight={"medium"}>Naparajith</Heading>
      <Flex direction={"row"} gap={"6"} align={"center"} px={"4"}>
        {pages.map(function (page, index) {
          return (
            <NavItem key={index} href={page.href} innerHTML={page.innerHTML} />
          );
        })}
        <Flex gap={"4"}>
          <Link href={"/collaborate"}>
            <Button size={"2"}>Collaborate</Button>
          </Link>
          <a href="https://flowcv.com/resume/mdrssqq018" target="_blank">
            <Button size={"2"} color="iris">
              Resume <DownloadIcon />
            </Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function NavItem({
  href,
  innerHTML,
}: {
  href: Url;
  innerHTML: ReactNode;
}) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size={"3"}
        className="focus:underline focus:underline-offset-[4px] active:ring"
      >
        {innerHTML}
      </Button>
    </Link>
  );
}
