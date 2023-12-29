import { Contact } from "@/components/contact";
import Linktree from "@/components/linktree";
import { Profile } from "@/components/profile";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { linktree } from "@/lib/data";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Links() {
  return (
    <div className="container mx-auto my-auto flex flex-col items-stretch px-4 py-9">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
        <Profile />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <Contact />
          <Linktree
            icon={<ChatBubbleIcon width={36} height={36} />}
            heading={
              <>
                Chat with me <Badge>New</Badge>
              </>
            }
            text="Chat with me on WhatsApp."
            href={process.env.WHATSAPP_LINK}
          />
        </div>
      </div>
      <Separator className="my-9" />
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-3">
        {linktree.map(function (link, index) {
          return (
            <React.Fragment key={index}>
              <Linktree
                icon={link.icon}
                heading={link.heading}
                text={link.text}
                href={link.href}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
