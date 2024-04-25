import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",

  fields: [
    {
      name: "dachzeile",
      title: "Dachzeile",
      type: "string",
    },
    {
      name: "ueberschrift",
      title: "Überschrift",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: "text",
      title: "Text",
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


    { name: "bild", title: "Bild", type: "image" },

    orderRankField({ type: "home" }),
  ],
});
