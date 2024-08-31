import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | FinTech Dashboard",
    default: "FinTech Dashboard",
  },
  description:
    "This is a FinTech Dashboard for managing customer invoices, built with Next.js.",
  metadataBase: new URL("https://nextjs-dashboard-jade-theta-86.vercel.app/"),
  icons: {
    icon: "../public/new_logo_w.png", // or /favicon.jpg
    shortcut: "../public/new_logo_w.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
