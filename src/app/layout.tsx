import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Portofolio Cita Kurnia",
  description: "Resume of Cita Kurnia Fullstack Web Developer Position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex flex-col min-h-screen bg-primary-soft-pink z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-med-blue to-primary-pink w-full h-full md:w-2/5"></div>
          <div className="relative bg-primary-soft-pink w-full z-50 mx-auto px-4 py-3 md:py-5 lg:px-10">
            <Header />
          </div>
          <main className="relative flex items-center justify-center flex-grow mx-auto px-4 py-8 z-10">
            {children}
          </main>
          <div className="relative bg-primary-soft-pink w-full mx-auto px-4 py-4 md:py-5 z-10 lg:px-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
