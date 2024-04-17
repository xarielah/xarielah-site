import type { MDXComponents } from "mdx/types";
import { h1, h2, h3, h4, h5 } from "./components/markdown-elements/headings";
import img from "./components/markdown-elements/img";
import { ol, ul } from "./components/markdown-elements/lists";
import { a, blockquote, p } from "./components/markdown-elements/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    p: p,
    a: a,
    blockquote: blockquote,
    ol: ol,
    ul: ul,
    img: img,
    ...components,
  };
}
