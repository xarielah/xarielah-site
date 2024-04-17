type MDXMetadata = {
  title: string;
  description: string;
  icons: string[];
  cover: string;
};
// type MDXPosts = keyof typeof mapWorkToMd;

type MDXMetaObject = {
  [key: string]: MDXMetadata;
};

export const mdxMeta: MDXMetaObject = {
  test: {
    title: "Test",
    description: "Test",
    icons: ["test"],
    cover: "test",
  },
};

export function getMdPageMetadata(work: string): MDXMetadata | undefined {
  return mdxMeta[work];
}
