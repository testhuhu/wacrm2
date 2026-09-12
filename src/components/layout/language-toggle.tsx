"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Globe, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: "rtl" | "ltr";
}

const LANGUAGES: LanguageOption[] = [
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    dir: "ltr",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
];

export function LanguageToggle({ className }: { className?: string }) {
  const currentLocale = useLocale() || "ar";
  const [isSwitching, setIsSwitching] = useState<string | null>(null);

  const handleSelectLanguage = async (locale: string) => {
    if (locale === currentLocale || isSwitching) return;
    setIsSwitching(locale);

    const maxAge = 365 * 24 * 60 * 60; // 1 year
    const isSecure = typeof window !== "undefined" && window.location.protocol === "https:";

    // 1. Set cookies on client immediately
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${maxAge}; SameSite=Lax${isSecure ? "; Secure" : ""}`;
    document.cookie = `wacrm_locale=${locale}; path=/; max-age=${maxAge}; SameSite=Lax${isSecure ? "; Secure" : ""}`;

    // 2. Persist to localStorage
    try {
      localStorage.setItem("NEXT_LOCALE", locale);
      localStorage.setItem("wacrm_locale", locale);
    } catch {}

    // 3. Persist via server-side cookie endpoint
    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale }),
      });
    } catch {}

    // 4. Force reload so Server & Client components re-render with new locale and direction
    window.location.reload();
  };

  const activeLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex h-9 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none",
          className
        )}
        aria-label="تغيير اللغة / Change Language / Dil Değiştir"
        title="تغيير اللغة / Language / Dil"
      >
        {isSwitching ? (
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        ) : (
          <Globe className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">{activeLang.flag}</span>
        <span className="hidden sm:inline font-semibold">{activeLang.nativeName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={currentLocale === "ar" ? "start" : "end"}
        sideOffset={6}
        className="min-w-44 bg-popover text-popover-foreground p-1 shadow-lg border border-border"
      >
        {LANGUAGES.map((lang) => {
          const isSelected = lang.code === currentLocale;
          const isPending = isSwitching === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={cn(
                "flex items-center justify-between gap-3 cursor-pointer py-2.5 px-3 rounded-md transition-colors",
                isSelected && "bg-accent/80 font-semibold text-accent-foreground"
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="text-sm">{lang.nativeName}</span>
              </div>
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              ) : isSelected ? (
                <Check className="h-4 w-4 text-primary" />
              ) : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
