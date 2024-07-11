import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/containers/NvBer";
import Footer from "@/containers/Footer";
import {
  SeoOptimizationHeader,
  SeoOptimizationBody,
} from "@/components/sheared/Seo";
import "./globals.css";
import { Toaster } from "sonner";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dremable - Your Dream Wedding starts from here ",
  description:
    "Dream of a perfect wedding? Dremable makes it real! From wedding planners & photographers to makeup artists & vendors, Find everything as you dream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SeoOptimizationHeader />
      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <SeoOptimizationBody />
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <div className="bg-zinc-200">
          <NavBar />
          {children}
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
