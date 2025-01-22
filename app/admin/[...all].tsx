
import { NextStudio } from "next-sanity/studio";
import config from '@/sanity.config'
import { defineConfig } from "sanity";


export default function AdminPage() {
    return <NextStudio config={defineConfig(config)}/>
}