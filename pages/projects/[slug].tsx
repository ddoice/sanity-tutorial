import { getProject, getProjects } from "@/sanity/sanity-utils";
import type { Project } from "@/types/Project";
import { GetStaticProps, GetStaticPaths } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  project: Project | null;
};

export default function ProjectPage({ project }: Props) {
  if (!project) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  console.log("project", project);
  return (
    <div className="max-w-7xl mx-auto py-12 flex gap-4 flex-col sm:px-4">
      <header className="flex justify-between items-center ">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent">{project.name}</h1>
        <a
          href={project.url}
          title="View project"
          target="_blank"
          rel="noopener noferrer"
          className="bg-gray-100 rounded text-gray-500 font-bold py-y px-4 whitespace-nowrap py-2"
        >
          View project
        </a>
      </header>
      <div className="text-lg text-gray-200 flex flex-col gap-4 mt-4">
        <PortableText value={project.content} />
          {project.image && 
              <Image
                src={project.image}
                alt={project.name}
                height={1080}
                width={1920}
                className="border-2 border-gray-300 rounded-md object-cover w-full"                />
        }
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params as { slug: string };
  const project = await getProject(slug);
  return {
    props: { project },
  };
};
