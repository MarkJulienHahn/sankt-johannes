import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "25h1ynuw",
  dataset: "production",
  apiVersion: "2024-04-16",
});

export default client;

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]|order(orderRank){..., "bild": bild.asset->{url, metadata}}`
  );
}

export async function getFooter() {
  return client.fetch(groq`*[_type == "footer"]{...}`);
}

export async function getFaq() {
  return client.fetch(
    groq`*[_type == "faq"]|order(orderRank){..., "datei": datei{..., "file": file.asset->{...}}}`
  );
}

export async function getImpressum() {
  return client.fetch(groq`*[_type == "impressum"]{...}`);
}
