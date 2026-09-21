export interface Section {
  readonly id: string;
  readonly marker: string;
  readonly title: string;
  readonly body: string;
}

export const profile = {
  name: "Andrey Costa",
  role: "Fundador da TEC RN",
  company: "TEC RN",
  location: "Rio Grande do Norte, Brasil",
  tagline: "Tecnologia que move o futuro.",
  summary:
    "Andrey Costa é o fundador da TEC RN. Entre código, estratégia e execução, ele constrói uma nova geração de negócios digitais.",
  themes: ["Ambição", "Tecnologia", "Legado"],
} as const;

export const sections: readonly Section[] = [
  {
    id: "inicio",
    marker: "01 / ORIGEM",
    title: "ANDREY — Fundador da TEC RN",
    body: "Abertura cinematográfica: a luz recorta Andrey Costa ao lado do notebook, com a cidade ao fundo, e apresenta o fundador da TEC RN.",
  },
  {
    id: "visao",
    marker: "02 / VISÃO",
    title: "O futuro não é esperado. É construído.",
    body: "Entre código, estratégia e execução, nasce uma nova geração de negócios digitais.",
  },
  {
    id: "movimento",
    marker: "03 / MOVIMENTO",
    title: "DA VISÃO À REALIDADE.",
    body: "A trajetória da TEC RN em três marcas: ambição, tecnologia e legado.",
  },
  {
    id: "final",
    marker: "O PRÓXIMO CAPÍTULO",
    title: "TEC RN",
    body: "Tecnologia que move o futuro. Andrey Costa, 2026.",
  },
];
