import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../content";

export default defineTool({
  name: "get_profile",
  title: "Perfil de Andrey Costa",
  description:
    "Retorna o perfil público de Andrey Costa, fundador da TEC RN: nome, cargo, local, resumo e temas.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: `${profile.name} — ${profile.role} (${profile.company}, ${profile.location}). ${profile.summary}`,
      },
    ],
    structuredContent: {
      profile: {
        name: profile.name,
        role: profile.role,
        company: profile.company,
        location: profile.location,
        tagline: profile.tagline,
        summary: profile.summary,
        themes: [...profile.themes],
      },
    },
  }),
});
