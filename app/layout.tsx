import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/Shared/navbar";
import clsx from "clsx";
import { QueryProviders, ThemeProviders } from "@/components/Shared/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          card: "py-2 bg-white dark:bg-black dark:border-yellow-600",
          headerTitle: "text-black dark:text-white",
          headerSubtitle: "text-black dark:text-white",
          socialButtonsBlockButton:
            "text-black bg-white dark:bg-white dark:text-black",
          dividerLine: "bg-black dark:bg-white",
          dividerText: "text-black dark:text-white",
          formFieldLabel: "text-black dark:text-white",
          formFieldRow: "text-black dark:text-white",
          logoBox:
            "justify-center align-center text-center flex w-full pl-36 pt-2",
          footerActionText: "text-black dark:text-white",
          organizationSwitcherPopoverMain: "text-black dark:text-white",
          organizationSwitcherPopoverActionButton: "text-black dark:text-white",
          organizationSwitcherPopoverActionButton__createOrganization:
            "text-black dark:text-white",
          organizationSwitcherPopoverActionButtonText:
            "text-black dark:text-white",
          organizationSwitcherPopoverActionButtonIcon__createOrganization:
            "text-black dark:text-white",
          organizationSwitcherPopoverActions:
            "dark:border-gray-800",
          formButtonPrimary:
            "bg-gradient-to-tl from-[#FF705B] to-[#FFB457] text-black dark:text-white",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning className="bg-background">
        <head />
        <body
          className={clsx(
            "min-h-screen  font-sans antialiased",
            fontSans.variable
          )}
        >
          <QueryProviders>
            <ThemeProviders
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  {children}
                </main>
              </div>
            </ThemeProviders>
          </QueryProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
