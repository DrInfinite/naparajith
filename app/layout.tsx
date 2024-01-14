import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        <html lang="en" suppressHydrationWarning>
            <body className="">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <TooltipProvider>
                        <Toaster position="bottom-right" richColors />
                        {children}
                        <ModeToggle />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
