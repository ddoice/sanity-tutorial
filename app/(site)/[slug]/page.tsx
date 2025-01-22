import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);
  return (
    <div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent">
        {page.title}
      </h1>
      <div className="text-lg text-gray-800 dark:text-gray-200 mt-10"></div>
      <PortableText value={page.content} />
    </div>
  );
}
