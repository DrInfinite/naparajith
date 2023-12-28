import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naparajith | Blog",
  description:
    "Welcome to Naparajith's Blog Page. Here you can read the latest posts from Naps.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
