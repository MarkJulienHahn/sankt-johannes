import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "frage",
      title: "Frage",
      type: "string",
    },
    {
      name: "antwort",
      title: "Antwort",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Emphasis", value: "em" }],
          },
        },
      ],
    },
    {
      name: "datei",
      title: "Datei",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "file", type: "file" },
      ],
    },

    orderRankField({ type: "faq" }),
  ],
});
