import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naparajith | Personal Portfolio",
  description:
    "Naparajith is a software engineer who is highly motivated towards problem solving.",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
