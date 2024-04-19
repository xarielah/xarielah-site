import { DetailedHTMLProps, HTMLAttributes } from "react";

export function h1({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h1 className="mb-4 font-bold text-5xl">{children}</h1>;
}
export function h2({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h2 className="mb-4 font-bold text-4xl">{children}</h2>;
}
export function h3({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h3 className="mb-4 font-bold text-3xl">{children}</h3>;
}
export function h4({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h4 className="mb-4 font-bold text-2xl">{children}</h4>;
}
export function h5({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return <h5 className="mb-4 font-bold text-xl">{children}</h5>;
}
