import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { H4 } from "../ui/typography/heading";
import { P } from "../ui/typography/paragraph";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ContactCard() {
    return (
        <Tooltip>
            <TooltipTrigger className="w-full">
                <Card>
                    <CardContent className="flex flex-row items-center gap-6 md:gap-9">
                        <EnvelopeClosedIcon width={36} height={36} />{" "}
                        <div className="flex flex-col items-start text-center">
                            <H4 className="flex items-center gap-2 whitespace-break-spaces">
                                Get in Touch
                                <Badge variant={"default"}>Updated</Badge>
                            </H4>
                            <P>Drop a mail and let&apos;s connect!</P>
                        </div>
                    </CardContent>
                </Card>
            </TooltipTrigger>
            <TooltipContent>Get in Touch</TooltipContent>
        </Tooltip>
    );
}
