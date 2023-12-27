import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Url } from "url";

export default function Linktree({
  icon,
  heading,
  text,
  href,
}: {
  icon: React.ReactNode;
  heading: React.ReactNode;
  text: React.ReactNode;
  href?: string | undefined;
}) {
  return (
    <Card variant="classic" className="p-4">
      <a href={href} target="_blank">
        <Flex gap={"9"} align={"center"}>
          {icon}
          <Flex direction={"column"}>
            <Heading>{heading}</Heading>
            <Text>{text}</Text>
          </Flex>
        </Flex>
      </a>
    </Card>
  );
}
