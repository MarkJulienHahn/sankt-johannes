import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",

  fields: [
    {
      name: "ankuendigung",
      title: "Ankündigung",
      type: "object",
      fields: [
        {
          name: "ueberschrift",
          title: "Überschrift",
          type: "string",
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
      ],
    },

    {
      name: "kontakt",
      title: "Kontakt",
      type: "object",
      fields: [
        {
          name: "ueberschrift",
          title: "Überschrift",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
