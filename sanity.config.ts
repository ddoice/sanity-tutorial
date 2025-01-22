import { structureTool } from "sanity/structure";
import { config as baseConfig } from "./sanity/config";
import schemas from "./sanity/schemas";
const config =  {
  ...baseConfig,
  title: "Personal blog",
  basePath: "/admin",
  type: "document",
  schema: { types: schemas },
  plugins : [structureTool()],
};
export default config;