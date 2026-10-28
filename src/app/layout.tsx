import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Revyn — AI Code Reviewer",
  description:
    "Revyn uses AI to review GitHub pull requests and help developers catch potential bugs, security risks, and logic issues before merging.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Revyn — AI Code Reviewer",
    description:
      "AI-powered code reviews, instantly. Catch potential issues before your code gets merged.",
    siteName: "Revyn",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <body className="font-sans antialiased">
          {children}
          <Toaster position="top-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}