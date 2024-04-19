import type { MDXProps } from "mdx/types";

export type MDComponent = (props: MDXProps) => JSX.Element;

export type MDXMetadata = {
  title: string;
  slug: string;
  authoredAt: string;
  icons: MDXProjectStack[];
  description: string;
  cover?: string;
  component: (props: MDXProps) => JSX.Element;
};

export enum MDXProjectStack {
  REACT = "react",
  NEXT = "next",
  TAILWIND = "tailwind",
  TYPESCRIPT = "typescript",
  MDX = "mdx",
  JAVASCRIPT = "javascript",
  HTML = "html",
  CSS = "css",
  SASS = "sass",
  POSTCSS = "postcss",
  JEST = "jest",
  ESLINT = "eslint",
  PRETTIER = "prettier",
  HUSKY = "husky",
  LINTSTAGED = "lint-staged",
  GIT = "git",
  GITHUB = "github",
  GITLAB = "gitlab",
  BITBUCKET = "bitbucket",
  VSCODE = "vscode",
  WEBSTORM = "webstorm",

  // Backend
  NODE = "node",
  EXPRESS = "express",
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
  MYSQL = "mysql",
  SQLITE = "sqlite",
  SEQUELIZE = "sequelize",
  TYPEORM = "typeorm",
  GRAPHQL = "graphql",
  APOLLO = "apollo",
  PRISMA = "prisma",
  STRAPI = "strapi",
  DJANGO = "django",
  FLASK = "flask",
  FASTAPI = "fastapi",
  RAILS = "rails",
  PHOENIX = "phoenix",
  LARAVEL = "laravel",
}

export type MDXMetaObject = {
  [key: string]: MDXMetadata;
};
