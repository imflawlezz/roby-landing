import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roby",
  description: "Power Of Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en">
        <head>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        </head>
        <body
            className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
            {children}
        </body>
    </html>
);
}
