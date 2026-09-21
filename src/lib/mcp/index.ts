import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listSectionsTool from "./tools/list-sections";
import getSectionTool from "./tools/get-section";

export default defineMcp({
  name: "midnight-genesis",
  title: "Midnight Genesis",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas do site de Andrey Costa, fundador da TEC RN. Use `get_profile` para o perfil, `list_sections` para descobrir as seções e `get_section` para ler uma seção específica.",
  tools: [getProfileTool, listSectionsTool, getSectionTool],
});
