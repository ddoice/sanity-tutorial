import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="flex justify-between items-center ">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent">{project.name}</h1>
        <a
          href={project.url}
          title="View project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded text-gray-500 font-bold py-2 px-4 whitespace-nowrap"
        >
          View project
        </a>
      </header>
      <div className="text-lg text-gray-200 flex flex-col gap-4 mt-4">
        <PortableText value={project.content} />
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="border-2 border-gray-300 rounded-md object-cover w-full"
          />
        )}
      </div>
    </>
  );
}
