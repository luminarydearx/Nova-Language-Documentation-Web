"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "id", name: "Indonesian" },
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh-CN", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
];

const SALT = "N0v4-S3cur3-L4ng:";

function encodeLang(lang: string) {
  return typeof window !== "undefined" ? btoa(SALT + lang) : lang;
}

function decodeLang(encoded: string) {
  try {
    const decoded = typeof window !== "undefined" ? atob(encoded) : "";
    if (decoded.startsWith(SALT)) {
      return decoded.replace(SALT, "");
    }
  } catch (e) {}
  return null;
}

export default function GoogleTranslate() {
  const [lang, setLang] = useState("en");
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    let activeLang = "en";

    // Subvert console manipulation: Read secure obfuscated local state
    try {
      const stored = localStorage.getItem("_nova_ui_lang");
      if (stored) {
        const decoded = decodeLang(stored);
        if (decoded && languages.some((l) => l.code === decoded)) {
          activeLang = decoded;
        } else {
          // If the decoded value is malicious or missing, purge the local storage
          localStorage.removeItem("_nova_ui_lang");
        }
      }
    } catch (e) {}

    // Forcefully rewrite the cookie to our secure activeLang state
    // This entirely blocks simple document.cookie tampering in the browser console
    const expectedCookie = `/en/${activeLang}`;
    const match = document.cookie.match(/googtrans=([^;]+)/);
    const currentCookie = match ? match[1] : null;

    if (activeLang !== "en" && currentCookie !== expectedCookie) {
      document.cookie = `googtrans=${expectedCookie}; path=/;`;
      document.cookie = `googtrans=${expectedCookie}; path=/; domain=${location.hostname};`;
      window.location.reload();
      return;
    } else if (
      activeLang === "en" &&
      currentCookie &&
      currentCookie !== "/en/en"
    ) {
      // Clear translation state returning to English
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${location.hostname};`;
      window.location.reload();
      return;
    }

    setLang(activeLang);

    if (
      typeof window !== "undefined" &&
      !document.getElementById("google-translate-script")
    ) {
      // Define the callback
      window.googleTranslateElementInit = () => {
        try {
          if (window.google?.translate?.TranslateElement) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                autoDisplay: false,
              },
              "google_translate_element", // We hide this div
            );
          }
        } catch (e) {
          console.error("Error initializing Google Translate:", e);
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (newLang: string) => {
    setIsTranslating(true);
    try {
      localStorage.setItem("_nova_ui_lang", encodeLang(newLang));
    } catch (e) {}

    setLang(newLang);
    // Set cookie for both domain and subdomains
    document.cookie = `googtrans=/en/${newLang}; path=/;`;
    if (typeof location !== "undefined") {
      document.cookie = `googtrans=/en/${newLang}; path=/; domain=${location.host};`;
      document.cookie = `googtrans=/en/${newLang}; path=/; domain=${location.hostname};`;
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center gap-2 min-h-8">
      <div id="google_translate_element" className="hidden" />
      {isTranslating ? (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-nova-cyan/10 border border-nova-cyan/30 rounded text-nova-cyan text-xs font-mono w-35 justify-center">
          <svg
            className="animate-spin h-3.5 w-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Translating
        </div>
      ) : (
        <select
          value={lang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-nova-card text-nova-white border border-nova-border/50 text-xs font-mono rounded px-2 py-1.5 focus:outline-none focus:border-nova-cyan transition-colors w-35 cursor-pointer"
        >
          <option value="en">Language (En)</option>
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}
