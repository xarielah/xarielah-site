import ProjectWrapper from "@/components/works/project-wrapper";
import { getMdPageKeys, getMdPageMetadata } from "@/lib/md-utils";
import { notFound } from "next/navigation";

interface IProjectPage {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: IProjectPage) {
  const data = getMdPageMetadata(params.projectId);
  if (!data) return notFound();
  const { title, icons, authoredAt, component: ProjectComponent } = data;
  return (
    <ProjectWrapper title={title} tags={icons} authoredAt={authoredAt}>
      <ProjectComponent />
    </ProjectWrapper>
  );
}

/**
 * Used for optimization by generating static paths.
 */
export async function generateStaticParams() {
  return getMdPageKeys();
}
