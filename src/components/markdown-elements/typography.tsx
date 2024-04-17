import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export function p({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return <p>{children}</p>;
}

export function a({
  children,
  href,
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="font-light text-blue-600 underline hover:text-purple-800 ease-in-out duration-200"
    >
      {children}
    </a>
  );
}

export function blockquote({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 pr-2 py-2 italic m-4">
      {children}
    </blockquote>
  );
}
