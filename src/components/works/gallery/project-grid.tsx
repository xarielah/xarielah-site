import { getMdPreviewData } from "@/lib/md-utils";
import ProjectCard from "./project-card";

export default function ProjectGrid() {
  const projects = getMdPreviewData();
  return (
    <section className="space-y-14 pt-8">
      {projects.map((prj) => (
        <ProjectCard
          key={prj.slug}
          title={prj.title}
          description={prj.description}
          tags={prj.icons}
          slug={prj.slug}
        />
      ))}
    </section>
  );
}
