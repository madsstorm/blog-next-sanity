import "../globals.css";

import { Noto_Sans } from "next/font/google";

const notosans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export { metadata, viewport } from "next-sanity/studio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notosans.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
