import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { ContactCard } from "./contact-card";
import { ContactForm } from "./contact-form";

export function ContactDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <ContactCard />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-0">Let&apos;s Connect</DialogTitle>
          <DialogDescription>
            Get in touch with me through this form or by using the email{" "}
            <strong>
              <a
                href="mailto:naparajith@duck.com"
                className="hover:underline hover:underline-offset-4"
                target="_blank"
              >
                naparajith@duck.com
              </a>
            </strong>
          </DialogDescription>
        </DialogHeader>
        <ContactForm open={open} setOpen={setOpen} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"} className="w-full">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
