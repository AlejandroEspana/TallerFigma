import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "Order your favourite food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-[#1A1A1A] flex flex-col bg-[#F3F4F6]">
        <CartProvider>
          <div className="w-full flex-1 flex justify-center items-start">
            <main className="w-full max-w-[428px] min-h-screen relative overflow-x-hidden flex flex-col bg-[linear-gradient(to_bottom_left,color-mix(in_srgb,var(--color-background-start)_40%,white)_0%,var(--color-background-end)_60%)] shadow-2xl">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
