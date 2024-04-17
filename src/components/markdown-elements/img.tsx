import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export default function img({
  src,
  alt,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <span className="flex flex-col items-center justify-between">
      <img
        alt={alt ?? ""}
        src={src ?? ""}
        className="shadow-md rounded-md"
        loading="lazy"
      />
      <em className="text-sm text-gray-600 px-4 py-2">{alt}</em>
    </span>
  );
}
