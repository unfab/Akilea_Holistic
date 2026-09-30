import { NextResponse, type NextRequest } from "next/server";
import { getBlogPost } from "@/data/blogs";
import { isOnlinePaymentEnabled } from "@/config/site";

// The root loading.tsx makes every page stream, so notFound() inside a page
// can only produce a soft 404 (HTTP 200 + noindex). Deciding here, before
// rendering, lets unknown routes answer with a real 404 status.
const UNMATCHED_PATH = "/__not-found";

function blogPostExists(pathname: string): boolean {
  const raw = pathname.slice("/blog/".length);
  if (getBlogPost(raw)) return true;
  try {
    return Boolean(getBlogPost(decodeURIComponent(raw)));
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const exists = pathname === "/uspesno" ? isOnlinePaymentEnabled() : blogPostExists(pathname);
  if (exists) return NextResponse.next();
  return NextResponse.rewrite(new URL(UNMATCHED_PATH, request.url));
}

export const config = {
  matcher: ["/blog/:slug", "/uspesno"],
};
