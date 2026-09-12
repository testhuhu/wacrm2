import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { LanguageToggle } from "@/components/layout/language-toggle";

// Shared metadata for auth pages (login / signup / forgot-password).
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <LanguageToggle />
        <ModeToggle />
      </div>
      {children}
    </div>
  );
}
