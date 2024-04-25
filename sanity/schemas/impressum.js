import { defineType } from "sanity";

export default defineType({
  name: "impressum",
  title: "Impressum",
  type: "document",

  fields: [
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
  preview: {
    select: {},
    prepare() {
      return {
        title: "Impressum",
      };
    },
  },
});
