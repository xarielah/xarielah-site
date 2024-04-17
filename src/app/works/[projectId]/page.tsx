import { getMdPage, getMdPageKeys } from "@/app/lib/map-work-to-md";
import { notFound } from "next/navigation";

interface IProjectPage {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: IProjectPage) {
  const ProjectComponent = getMdPage(params.projectId);
  if (!ProjectComponent) return notFound();
  return <ProjectComponent />;
}

export async function generateStaticParams() {
  return getMdPageKeys();
}
