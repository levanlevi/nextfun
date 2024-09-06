"use client";

import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Theme } from "@radix-ui/themes";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        <Theme
          radius="medium"
          accentColor="gray"
          appearance="dark"
          panelBackground="translucent"
          className="bg-background">
          <ApolloProvider client={client}>
            <Header />
            <div className="px-[112px]">
              <main>
                {children}
              </main>
            </div>
            <Footer />
          </ApolloProvider>
        </Theme>
      </body>
    </html>
  );
}
