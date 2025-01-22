import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  return (
      <div className="max-w-7xl mx-auto py-12 flex gap-4 flex-col sm:px-4">
      
      <h1 className="text-4xl font-extrabold">Hey, I&apos;m <span className="bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent">Rafa</span> 👋</h1>
      <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">Hey bruh! I&apos;m a full stack parent and full time developer with some solopreneur-indie hacker masochistic tendencies.</p>
      <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug}`} className="border-2 border-gray-500 rounded p-4 hover:border-blue-600 hover:scale-105 transition-all">
                <h2 className="pb-4 text-lg">{project.name}</h2>
                {project.image && 
                  <div className="w-72 h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      height={208}
                      width={288}
                      className="w-full h-full object-cover"
                      />
                  </div>            
              }
           </Link>
        ))}
        </div>
      </div>
  );
}

export async function getServerSideProps() {
  const projects = await getProjects().catch((error) => {
    console.error("Error fetching projects:", error);
    return []; // Return empty array on error
  });
  console.log("projects", projects);
  return {
    props: { projects },
  };
}
