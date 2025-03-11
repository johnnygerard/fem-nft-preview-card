import { AppRouterProvider } from "@/component/app-router-provider";
import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const outfit = Outfit({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
});

const APP_NAME = "NFT preview card";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://fem-nft-preview-card-jgerard.vercel.app"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html className={cn(outfit.variable, "font-sans antialiased")} lang="en-US">
      <body className="bg-[#0D192C] text-white">
        <AppRouterProvider>{children}</AppRouterProvider>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
