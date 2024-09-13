import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { ClerkProvider } from "@clerk/nextjs";
import {
  SeoOptimizationHeader,
  SeoOptimizationBody,
} from "@/components/sheared/Seo";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";
import "./globals.css";

// Lazy load non-critical components
const WhatsAppFloat = dynamic(
  () => import("@/components/sheared/WhatsAppFloat"),
  { ssr: false }
);
const Toaster = dynamic(() => import("sonner").then((mod) => mod.Toaster), {
  ssr: false,
});

// Preload Google Font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dremable.com/"),
  title: {
    template: `%s - Dremable`,
    default: "Dremable - India’s One-Stop Wedding Planning Platform",
  },
  description:
    "Your Dream Wedding starts from here. Get All Top wedding planners, photographers, vendors & Venues in a single click. Let’s Turn your Love story into a Timeless Celebration.",
  twitter: {
    card: "summary_large_image",
  },
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
          {/* <SeoOptimizationHeader /> */}
          {/* Partytown setup with deferred scripts */}
          <Partytown debug={true} forward={["dataLayer.push"]} />
        </head>
        <body className={poppins.variable}>
          {/* <SeoOptimizationBody /> */}

          {/* NextSSRPlugin for file upload */}
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

          {/* Lazy-loaded components */}
          <WhatsAppFloat />
          <Toaster richColors />

          {/* Main content */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
