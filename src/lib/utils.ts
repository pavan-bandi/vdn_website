import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct image path with base URL prepended for static assets
 * This ensures images work correctly both in local dev and on GitHub Pages subdirectory
 */
export function getImagePath(imagePath: string): string {
  if (!imagePath) return "";
  
  // If it already has a protocol or is a data URL, return as-is
  if (imagePath.startsWith("http") || imagePath.startsWith("data:")) {
    return imagePath;
  }
  
  // Get base URL from Vite environment
  const baseUrl = import.meta.env.BASE_URL || "/";
  
  // Remove leading slash if it exists, then prepend base URL
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  
  // Ensure trailing slash in base URL for proper concatenation
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  
  return normalizedBase + cleanPath;
}
