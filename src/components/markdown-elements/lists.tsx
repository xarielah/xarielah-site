import { DetailedHTMLProps, HTMLAttributes } from "react";

export function ul({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
  return <ul className="list-disc list-inside">{children}</ul>;
}

export function ol({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>) {
  return <ol className="list-decimal list-inside">{children}</ol>;
}
