import { getHome, getFooter, getFaq } from "../../sanity/sanity-utils";

import Homepage from "../../components/Home/Homepage";
import Faq from "../../components/Home/Faq";
import Footer from "../../components/Footer/Footer";

export default async function Home() {
  const home = await getHome();
  const footer = await getFooter();
  const faq = await getFaq();
  return (
    <main>
      <Homepage home={home} />
      <Faq faq={faq} />

      <Footer footer={footer[0]} />
    </main>
  );
}
