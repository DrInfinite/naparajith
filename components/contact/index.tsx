"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import React, { useState } from "react";
import { ContactDialog } from "./contact-dialog";
import { ContactDrawer } from "./contact-drawer";

export function Contact() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <ContactDialog open={open} setOpen={setOpen} />;
  }

  return <ContactDrawer open={open} setOpen={setOpen} />;
}
