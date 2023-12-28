import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naparajith | Links",
  description: "A collection of important links related to Naparajith.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="dark"
          panelBackground="translucent"
          radius="large"
          accentColor="blue"
        >
          <Toaster position="top-right" containerStyle={{ zIndex: "100000" }} />
          {/* <Navbar /> */}
          {children}
        </Theme>
      </body>
    </html>
  );
}
