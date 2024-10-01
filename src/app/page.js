import {
  getHome,
  getProgram,
  getFooter,
  getFaq,
} from "../../sanity/sanity-utils";

import Homepage from "../../components/Home/Homepage";
import Programm from "../../components/Home/Programm";
import Faq from "../../components/Home/Faq";
import Footer from "../../components/Footer/Footer";

export default async function Home() {
  const home = await getHome();
  const program = await getProgram();
  const footer = await getFooter();
  const faq = await getFaq();
  return (
    <main>
      <Homepage home={home} />
      <div className="eroeffnung">
        <h3>Auftaktwochenende</h3>
        <h1>Sankt Johannes lädt vom 11. – 13. Oktober ein</h1>
      </div>
      <Footer footer={footer[0]} />
      <Programm program={program} />
      <Faq faq={faq} />
      <div className="footerBottom">
        <div className="footerRow">
          <a href={"/impressum"}>Impressum, </a>

          <a href={"/datenschutz"}>Datenschutz</a>
        </div>
        <span>©{new Date().getFullYear()}, Kirchengemeinde St. Johannes</span>
      </div>
    </main>
  );
}

export const revalidate = 10;
