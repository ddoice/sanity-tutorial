import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import {structureTool} from 'sanity/structure'

//import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "xamkw67s",
    dataset: "production",
    title: "Personal blog",
    useCdn: true,
    basePath: "/admin",
    schema: { types: schemas },
    apiVersion: '2023-03-04',
    //plugins : [structureTool()],
    //apiVersion: "",
});

export default config;