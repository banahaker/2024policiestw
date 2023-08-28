import { Providers } from "./providers";
import "./global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>2024 總統政見便利貼</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
