import "../globals.css";

import { fontInter } from "../fonts";

export { metadata, viewport } from "next-sanity/studio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontInter.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
