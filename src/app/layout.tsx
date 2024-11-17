import { AuthProvider } from "@/context/auth-context";

import { Inter } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/context/react-query";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Painel de Administrador - NAF",
  description: "Made by Levi Morais",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Toaster richColors position="top-center"/>
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                  {children}
              </QueryClientProvider>
            </AuthProvider>
          </NextThemeProvider>
      </body>
    </html>
  );
}
