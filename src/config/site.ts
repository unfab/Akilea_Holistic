// Central site configuration. NEXT_PUBLIC_* values are inlined at build time,
// so changing them on Netlify requires a redeploy.

export const SITE_URL = "https://www.akilea.si";

// TODO: fill in once Mirjana confirms the profile URLs. An empty URL hides the link.
export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
} as const;

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export function isOnlinePaymentEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT === "true";
}
