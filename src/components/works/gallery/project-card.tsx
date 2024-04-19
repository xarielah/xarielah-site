import { MDXProjectStack } from "@/lib/md-types";
import Link from "next/link";

interface IProjectCard {
  title: string;
  description: string;
  slug: string;
  tags: MDXProjectStack[];
}

export default function ProjectCard({
  title,
  slug,
  description,
  tags,
}: IProjectCard) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <Link href={`/work/${slug}`} className="flex items-center">
          <h3 className="font-bold text-2xl hover:translate-x-2 ease-in-out duration-300">
            {title}
          </h3>
        </Link>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </div>
      </div>

      <Link href={`/work/${slug}`}>
        <p>{description}</p>
      </Link>
    </div>
  );
}
