import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Portfolio",
        template: "%s | Naparajith",
    },
    description:
        "The personal portfolio of T L Naparajith, a CSE Undergrad and software engineer from India",
    authors: [
        {
            name: "DrInfinite",
            url: "https://github.com/DrInfinite",
        },
        {
            name: "Naparajith T L",
            url: "https://in.linkedin.com/in/naparajith",
        },
    ],
    creator: "Naparajith",
    publisher: "Naparajith",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Toaster position="bottom-right" richColors />
                    {children}
                    <ModeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}
