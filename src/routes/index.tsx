import { createFileRoute } from "@tanstack/react-router";
import andreyPortrait from "@/assets/andrey-costa.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrey Costa — Fundador da TEC RN" },
      {
        name: "description",
        content:
          "A trajetória de Andrey Costa, fundador da TEC RN, entre tecnologia, visão e futuro.",
      },
      { property: "og:title", content: "Andrey Costa — Fundador da TEC RN" },
      {
        property: "og:description",
        content: "Tecnologia, visão e futuro. Conheça Andrey Costa e a TEC RN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const particles = [
  [12, 18, 8],
  [22, 64, 13],
  [35, 31, 10],
  [48, 81, 16],
  [59, 23, 11],
  [67, 69, 7],
  [78, 38, 14],
  [87, 76, 9],
  [93, 28, 12],
] as const;

function AmbientParticles() {
  return (
    <div className="ambient-particles" aria-hidden="true">
      {particles.map(([left, top, delay]) => (
        <i
          key={`${left}-${top}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `-${delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Monogram() {
  return (
    <a className="monogram" href="#inicio" aria-label="Andrey Costa — início">
      A<span>C</span>
    </a>
  );
}

function Index() {
  return (
    <main className="cinema-shell">
      <AmbientParticles />

      <header className="topbar">
        <Monogram />
        <p>TEC RN · BRASIL</p>
      </header>

      <section id="inicio" className="opening" aria-labelledby="andrey-title">
        <div className="opening-light" aria-hidden="true" />
        <figure className="cinema-frame">
          <img
            src={andreyPortrait.url}
            alt="Andrey Costa sentado ao lado de seu notebook, com a cidade ao fundo"
            fetchPriority="high"
          />
          <div className="portrait-shade" aria-hidden="true" />
        </figure>

        <div className="opening-copy">
          <p className="scene-marker">01 / ORIGEM</p>
          <h1 id="andrey-title">ANDREY</h1>
          <p className="founder-line">FUNDADOR DA TEC RN</p>
        </div>

        <a className="scroll-cue" href="#visao" aria-label="Continuar para a visão">
          <span />
          CONTINUAR
        </a>
      </section>

      <section id="visao" className="vision" aria-labelledby="vision-title">
        <div className="vision-beam" aria-hidden="true" />
        <div className="vision-index" aria-hidden="true">
          02
        </div>
        <div className="vision-copy">
          <p className="scene-marker">VISÃO</p>
          <h2 id="vision-title">
            O futuro não é esperado.
            <br />
            <em>É construído.</em>
          </h2>
          <p>
            Entre código, estratégia e execução, nasce uma nova geração de
            negócios digitais.
          </p>
        </div>
      </section>

      <section className="trajectory" aria-labelledby="trajectory-title">
        <p className="scene-marker">03 / MOVIMENTO</p>
        <h2 id="trajectory-title">DA VISÃO À REALIDADE.</h2>
        <div className="trajectory-line" aria-hidden="true">
          <span />
        </div>
        <div className="trajectory-notes">
          <p>AMBIÇÃO</p>
          <p>TECNOLOGIA</p>
          <p>LEGADO</p>
        </div>
      </section>

      <footer className="finale">
        <p className="scene-marker">O PRÓXIMO CAPÍTULO</p>
        <p className="tec-mark">TEC<span>RN</span></p>
        <p className="finale-note">Tecnologia que move o futuro.</p>
        <div className="finale-meta">
          <span>ANDREY COSTA</span>
          <span>2026</span>
        </div>
      </footer>
    </main>
  );
}