export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="space-y-4">{children}</article>;
}
