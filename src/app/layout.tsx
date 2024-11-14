import { filterStandardClaims } from "next-firebase-auth-edge/lib/auth/claims";
import { Tokens, getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { User } from "@/context/auth-context"
import { AuthProvider } from "@/context/auth-provider";

import { Inter } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/context/react-query";



const toUser = ({ decodedToken }: Tokens): User => {
  const {
    uid,
    email,
    picture: photoURL,
    email_verified: emailVerified,
    phone_number: phoneNumber,
    name: displayName,
    source_sign_in_provider: signInProvider,
  } = decodedToken;
 
  const customClaims = filterStandardClaims(decodedToken);

 
  return {
    uid,
    email: email ?? null,
    displayName: displayName ?? null,
    photoURL: photoURL ?? null,
    phoneNumber: phoneNumber ?? null,
    emailVerified: emailVerified ?? false,
    providerId: signInProvider,
    customClaims,
  };
};
 

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
  const tokens = await getTokens(await cookies(), {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
    cookieName: 'AuthToken',
    cookieSignatureKeys: [
      'AVuYwhrby45PqE3CPDLJcNBP463Cyfkm'
    ],
    serviceAccount: {
      projectId: "naf-admin-panel",
      clientEmail: "firebase-adminsdk-5myyy@naf-admin-panel.iam.gserviceaccount.com",
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY as string,
    }
  });
  const user = tokens ? toUser(tokens) : null;

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Toaster richColors />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider user={user}>
              <QueryClientProvider client={queryClient}>
                  {children}
              </QueryClientProvider>
            </AuthProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
