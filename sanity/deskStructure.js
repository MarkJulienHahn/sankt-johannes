import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "home",
        title: "Homepage",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "faq",
        title: "FAQ",
        S,
        context,
      }),

      S.divider(),

      S.listItem()
        .title("Footer")
        .id("footer")
        .child(S.document().schemaType("footer").documentId("footer")),

      S.divider(),

      S.listItem()
        .title("Impressum")
        .id("impressum")
        .child(S.document().schemaType("impressum").documentId("impressum")),

      S.listItem()
        .title("Datenschutz")
        .id("datenschutz")
        .child(
          S.document().schemaType("datenschutz").documentId("datenschutz")
        ),
    ]);
