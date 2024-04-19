import type { MDXProjectStack } from "@/lib/md-types";

interface IProjectWrapper {
  title: string;
  tags: MDXProjectStack[];
  authoredAt: string;
  children: React.ReactNode;
}

export default function ProjectWrapper({
  children,
  title,
  authoredAt,
  tags,
}: IProjectWrapper) {
  return (
    <article>
      <header className="my-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-[.9rem] text-gray-600 mt-1">Ariel Aharon</p>
        <p className="text-[.9rem] text-gray-600">{authoredAt}</p>
      </header>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="space-y-5">{children}</div>
    </article>
  );
}
