import ProjectCard from "./project-card";

export default function ProjectGrid() {
  return (
    // <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <section className="space-y-14">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}
