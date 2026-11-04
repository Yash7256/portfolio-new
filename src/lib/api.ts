export function getApiUrl(): string {
  if (typeof window !== "undefined") {
    const url = window.location.origin + "/api";
    return url;
  }
  return "";
}

export const isBrowser = typeof window !== "undefined";