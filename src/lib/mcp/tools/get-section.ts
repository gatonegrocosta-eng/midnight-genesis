import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { sections } from "../content";

export default defineTool({
  name: "get_section",
  title: "Ler uma seção do site",
  description:
    "Retorna o conteúdo completo de uma seção do site pelo identificador (use list_sections para descobrir os identificadores).",
  inputSchema: {
    id: z.string().trim().min(1).describe("Identificador da seção, ex.: inicio, visao, movimento, final."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const section = sections.find((s) => s.id === id.toLowerCase());
    if (!section) {
      throw new ToolError(
        `Seção "${id}" não existe. Identificadores válidos: ${sections.map((s) => s.id).join(", ")}.`,
      );
    }
    return {
      content: [
        { type: "text" as const, text: `${section.marker} — ${section.title}\n\n${section.body}` },
      ],
      structuredContent: {
        section: {
          id: section.id,
          marker: section.marker,
          title: section.title,
          body: section.body,
        },
      },
    };
  },
});
