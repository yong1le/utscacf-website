import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "yong1le",
      name: "utscacf-website",
    },
  },
  ui: {
    brand: { name: "UTSC ACF" },
    navigation: ["vision", "committee", "ministry", "church", "content"],
  },
  collections: {
    // @see CommitteeType
    committee: collection({
      path: "content/committee/*",
      label: "Committee",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        image: fields.image({
          label: "Image (optional)",
          directory: "public/images/committee",
          publicPath: "/images/committee",
        }),
        roles: fields.array(fields.text({ label: "Role" }), {
          label: "Roles",
          description: "Roles for this committee member",
          itemLabel: (props) => props.value,
          validation: { length: { min: 1 } },
        }),
        handles: fields.array(
          fields.object({
            provider: fields.select({
              label: "Provider",
              description: "Social media provider or email",
              options: [
                { label: "Facebook", value: "facebook" },
                { label: "Instagram", value: "instagram" },
                { label: "Discord", value: "discord" },
                { label: "Email", value: "email" },
              ],
              defaultValue: "email",
            }),
            href: fields.url({
              label: "Link",
              description: "Link to the account",
              validation: {
                isRequired: true,
              },
            }),
          }),
        ),
      },
    }),

    // @see MinistryType
    ministry: collection({
      path: "content/ministry/*",
      label: "Ministries",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        image: fields.image({
          label: "Image (optional)",
          directory: "public/images/ministry",
          publicPath: "/images/ministry",
        }),
        description: fields.mdx({
          label: "Description",
          description:
            "Detailed description of the ministry (Who, What, Where, When, How, etc...)",
        }),
      },
    }),

    // @see ChurchType
    church: collection({
      path: "content/church/*",
      label: "Churches",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        image: fields.image({
          label: "Image (optional)",
          directory: "public/images/church",
          publicPath: "/images/church",
        }),
        description: fields.mdx({
          label: "Description",
          description: "Description of the Church (Address, Time, etc...)",
        }),
      },
    }),

    content: collection({
      path: "content/content/*",
      label: "Content",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        title: fields.text({ label: "Title" }),
        content: fields.mdx({
          label: "Content",
          description: "Content of the page",
        }),
      },
    }),
  },

  singletons: {
    // @see VisionType
    vision: singleton({
      path: "content/vision/",
      label: "Vision",
      entryLayout: "content",
      format: {
        contentField: "vision",
      },
      schema: {
        vision: fields.mdx({
          label: "Vision",
          description: "Vision of the Year",
        }),
        year: fields.text({
          label: "Year",
          description: "In the format 20XX-20YY",
        }),
      },
    }),
  },
});
