import { mdxPages } from "./md-pages";
import type { MDComponent, MDXMetadata } from "./md-types";

/**
 * Gets a slug and return it's component or undefined.
 * @param {string} slug
 * @returns component or undefined
 */
export function getMdPage(slug: string): MDComponent | undefined {
  return mdxPages.find((page) => page.slug === slug)?.component;
}

/**
 * Returns all slugs, string array.
 * @returns all slugs
 */
export function getMdPageKeys(): string[] {
  return mdxPages.map((page) => page.slug);
}

/**
 * Gets a slug and returns a metadata object or undefined.
 * @param {string} slug
 * @returns a metadata object or undefined
 */
export function getMdPageMetadata(slug: string): MDXMetadata | undefined {
  return mdxPages.find((page) => page.slug === slug);
}

/**
 * Returns all metadata.
 * @returns all metadata
 */
export function getMdPreviewData(): MDXMetadata[] {
  return mdxPages;
}
