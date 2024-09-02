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
  metadataBase: new URL("https://www.dremable.com/"),
  title: {
    template: `%s - Dremable`,
    default: "Dremable - India’s One-Stop Wedding Planning Platform",
  },
  description:
    "Your Dream Wedding starts from here. Get All Top wedding planners, photographers, vendors & Venues in a single click. Let’s Turn your Love story into a Timeless Celebration.",
  openGraph: {
    title: "Dremable - India’s One-Stop Wedding Planning Platform",
    description:
      "Your Dream Wedding starts from here. Get All Top wedding planners, photographers, vendors & Venues in a single click. Let’s Turn your Love story into a Timeless Celebration.",
    url: "https://www.dremable.com/",
    siteName: "Dremable - India’s One-Stop Wedding Planning Platform",
    images: "../../public/longLogo.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dremable - India’s One-Stop Wedding Planning Platform",
    images: ["../../public/longLogo.png"],
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
