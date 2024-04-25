import { PortableText } from "next-sanity";
import { getImpressum, getFooter } from "../../../sanity/sanity-utils";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";

export default async function Imperssum() {
  const impressum = await getImpressum();
  const footer = await getFooter();

  return (
    <main>
      <Nav />
      <div className="pageWrapper pagePadding">
        <PortableText value={impressum[0].text} />
      </div>
      <Footer footer={footer[0]} />
    </main>
  );
}
