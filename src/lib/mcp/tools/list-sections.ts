import { defineTool } from "@lovable.dev/mcp-js";
import { sections } from "../content";

export default defineTool({
  name: "list_sections",
  title: "Listar seções do site",
  description:
    "Lista as seções públicas do site de Andrey Costa / TEC RN com identificador, marcador e título.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: sections.map((s) => `${s.id} — ${s.marker}: ${s.title}`).join("\n"),
      },
    ],
    structuredContent: {
      sections: sections.map((s) => ({ id: s.id, marker: s.marker, title: s.title })),
    },
  }),
});
