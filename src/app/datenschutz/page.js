import { PortableText } from "next-sanity";
import { getDatenschutz, getFooter } from "../../../sanity/sanity-utils";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";

export default async function Imperssum() {
  const datenschutz = await getDatenschutz();
  const footer = await getFooter();

  return (
    <main>
      <Nav />
      <div className="pageWrapper pagePadding">
        <PortableText value={datenschutz[0]?.text} />
      </div>
      <Footer footer={footer[0]} />
    </main>
  );
}
