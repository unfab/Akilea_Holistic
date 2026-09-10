"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "sl",
              includedLanguages: "sl,en,hr,it,sr",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      } catch (err) {
        console.error("TranslateElement init error:", err);
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="notranslate"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "-1000px",
        left: "-1000px",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
