"use client";

import { useLocale } from "next-intl";
import { Globe, Check } from "lucide-react";
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

  const handleSelectLanguage = (locale: string) => {
    if (locale === currentLocale) return;

    // Set cookie for 1 year
    const maxAge = 365 * 24 * 60 * 60;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
    document.cookie = `wacrm_locale=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
    try {
      localStorage.setItem("NEXT_LOCALE", locale);
    } catch {}

    // Reload so Server & Client components apply the new locale and RTL/LTR direction
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
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{activeLang.flag}</span>
        <span className="hidden sm:inline font-semibold">{activeLang.nativeName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6} className="min-w-40 bg-popover text-popover-foreground">
        {LANGUAGES.map((lang) => {
          const isSelected = lang.code === currentLocale;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={cn(
                "flex items-center justify-between gap-3 cursor-pointer py-2 px-3",
                isSelected && "bg-accent/70 font-semibold text-accent-foreground"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span className="text-sm">{lang.nativeName}</span>
              </div>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
