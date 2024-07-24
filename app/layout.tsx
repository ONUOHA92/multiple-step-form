import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import Client from "@/component/Client";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  icons: "/assets/images/favicon-32x32.png",
  title: "Multi-step form - from FrontEndMentor ",
  description: "Front end challenge",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
