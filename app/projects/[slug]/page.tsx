import { notFound } from "next/navigation";
import { projectsData } from "@/mock/projects";
import ProjectDetailPageComponent from "./page-com";

export default  async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageComponent params={{ project }} />;
}
