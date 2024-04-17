import Test from "@/content/test.md";
import { MDXProps } from "mdx/types";

type MDMapType = {
  [key: string]: MDComponent;
};

export type MDComponent = (props: MDXProps) => JSX.Element;

export const mapWorkToMd = {
  test: Test,
};

export function getMdPage(work: string): MDComponent | undefined {
  return (mapWorkToMd as any)[work];
}

export function getMdPageKeys(): string[] {
  return Object.keys(mapWorkToMd);
}
