import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { ClerkProvider } from "@clerk/nextjs";
import {
  SeoOptimizationHeader,
  SeoOptimizationBody,
} from "@/components/sheared/Seo";
import WhatsAppFloat from "@/components/sheared/WhatsAppFloat";
import { Partytown } from "@builder.io/partytown/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dremable - Your Dream Wedding starts from here",
  description:
    "Dream of a perfect wedding? Dremable makes it real! From wedding planners & photographers to makeup artists & vendors, find everything as you dream.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <SeoOptimizationHeader />
          <Partytown debug={true} forward={["dataLayer.push"]} />
        </head>
        <body className={poppins.variable}>
          <SeoOptimizationBody />
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <WhatsAppFloat />
          <Toaster richColors />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
