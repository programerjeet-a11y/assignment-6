import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "FitLog | Train with intent",
  description: "A no-nonsense workout library and daily training log.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
