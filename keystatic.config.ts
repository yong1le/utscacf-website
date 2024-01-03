import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  // storage: {
  //   kind: "github",
  //   repo: {
  //     owner: "yong1le",
  //     name: "utscacf-website",
  //   },
  // },
  ui: {
    brand: { name: "UTSC ACF" },
    navigation: ["vision", "committee", "ministry", "event", "church"],
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
        handles: fields.object({
          facebook: fields.url({
            label: "Facebook (optional)",
            description: "Link to facebook account",
          }),
          instagram: fields.url({
            label: "Instagram (optional)",
            description: "Link to instagram account",
          }),
          email: fields.url({
            label: "Email (optional)",
            description: "Email address",
          }),
        }),
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
        description: fields.document({
          label: "Description",
          description:
            "Detailed description of the ministry (Who, What, Where, When, How, etc...)",
          formatting: true,
        }),
      },
    }),

    // @see EventType
    event: collection({
      path: "content/event/*",
      label: "Events",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        image: fields.image({
          label: "Image (optional)",
          directory: "public/images/event",
          publicPath: "/images/event",
        }),
        link: fields.url({
          label: "Link",
          description:
            "Relevant link regarding the event (Information, RBSP, etc...)",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description (optional)",
          description:
            "Description of the event (Who, What, Where, When, etc...)",
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
        description: fields.document({
          label: "Description",
          description: "Description of the Church (Address, Time, etc...)",
          formatting: true,
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
        vision: fields.document({
          label: "Vision",
          description: "Vision of the Year",
          formatting: true,
        }),
        year: fields.text({
          label: "Year",
          description: "In the format 20XX-20YY",
        }),
      },
    }),
  },
});
