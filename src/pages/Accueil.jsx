import Link from "../components/Link";
import Salutation from "../components/Salutation";

export default function Accueil() {
  return (
    <main>
      <section>
        <Salutation nom="armand ntawebangana">
          <Link>HTML/CSS</Link>
          <Link>JS</Link>
          <Link>SQL</Link>
          <Link>NoSQL</Link>
          <Link>Java</Link>
          <Link>C#</Link>
        </Salutation>
      </section>
    </main>
  );
}
