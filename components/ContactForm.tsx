"use client";

import React, { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage(t.contact.errorGeneric);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm text-terminal-cream/85"
            >
              {t.contact.name} <span className="text-terminal-lantern">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePlaceholder}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-terminal-bg/90 border border-terminal-border text-terminal-text placeholder:text-terminal-muted/50 text-sm focus:outline-none focus:border-terminal-neon focus:shadow-leaf transition-all disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm text-terminal-cream/85"
            >
              {t.contact.email} <span className="text-terminal-lantern">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.contact.emailPlaceholder}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-terminal-bg/90 border border-terminal-border text-terminal-text placeholder:text-terminal-muted/50 text-sm focus:outline-none focus:border-terminal-neon focus:shadow-leaf transition-all disabled:opacity-60"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm text-terminal-cream/85"
          >
            {t.contact.message} <span className="text-terminal-lantern">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.contact.messagePlaceholder}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl bg-terminal-bg/90 border border-terminal-border text-terminal-text placeholder:text-terminal-muted/50 text-sm focus:outline-none focus:border-terminal-neon focus:shadow-leaf transition-all resize-y disabled:opacity-60"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-terminal-cream/70">
            POST /api/contact
          </span>
          <button
            type="submit"
            disabled={isLoading}
            className="group/submit px-6 py-2.5 rounded-xl bg-gradient-to-r from-terminal-green via-terminal-neon to-terminal-lanternSoft text-terminal-bg font-bold text-sm shadow-lantern hover:shadow-lantern-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span>{isLoading ? t.contact.sending : t.contact.send}</span>
          </button>
        </div>
      </form>

      {status === "success" && (
        <div
          role="status"
          className="p-3.5 rounded-xl bg-terminal-bg border border-terminal-neon/40 text-terminal-neon text-xs sm:text-sm font-mono shadow-leaf"
        >
          &gt; {t.contact.success}
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="p-3.5 rounded-lg bg-terminal-bg border border-terminal-dot-red/50 text-terminal-dot-red text-xs sm:text-sm font-mono"
        >
          &gt; Status 400: {errorMessage}
        </div>
      )}
    </div>
  );
}
