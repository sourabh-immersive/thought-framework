import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/global.scss"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Script from "next/script";

const montserrat = Montserrat({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thought Frameworks | Your Trusted Software Testing Service Provider & QA Partner",
  description: "We are a trusted software testing service team that thrives testing by exceeding customer's QA expectations and helping them to release impactful software to the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Script src="/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}