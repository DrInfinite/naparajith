import { Card, CardContent } from "@/components/ui/card";
import { P } from "@/components/ui/typography/paragraph";
import { H4 } from "../ui/typography/heading";
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
    <a href={href} target="_blank">
      <Card>
        <CardContent className="flex flex-row items-center gap-6 md:gap-9">
          {icon}
          <div className="flex flex-col items-start text-center">
            <H4 className="whitespace-break-spaces">{heading}</H4>
            <P>{text}</P>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
