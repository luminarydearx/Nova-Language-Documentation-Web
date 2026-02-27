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

export default function GoogleTranslate() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Check current language from cookie
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match && match[1]) {
      setLang(match[1]);
    }

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
    setLang(newLang);
    // Set cookie for both domain and subdomains
    document.cookie = `googtrans=/en/${newLang}; path=/;`;
    document.cookie = `googtrans=/en/${newLang}; path=/; domain=${location.host};`;
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <div id="google_translate_element" className="hidden" />
      <select
        value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-nova-card text-nova-white border border-nova-border/50 text-xs font-mono rounded px-2 py-1.5 focus:outline-none focus:border-nova-cyan transition-colors"
      >
        <option value="en">Language (En)</option>
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>
    </div>
  );
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}
