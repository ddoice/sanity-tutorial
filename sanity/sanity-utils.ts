import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { config } from "./config";
import { Page } from "@/types/Page";

const client = createClient(config);

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    );
}

export async function getProject(slug: string): Promise<Project | null> {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    );
}

export async function getPages(): Promise<Page[]> {
    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    );
}