import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import { Providers } from "./Providers";
import { PagePreLoader } from "@/components/PagePreLoader";
import { Suspense } from "react";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Tumma",
  description: "Rahul Tumma's Portfolio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ProgressBarProvider>
          {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
          <ProgressBar className="progress-juice fixed h-16 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />

          <Suspense fallback={null}>
            <PagePreLoader />
          </Suspense>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "#fff",
            }}
            outerStyle={{
              border: "3px solid #fff",
            }}
          />
          <Providers>{children}</Providers>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
