import { Entry } from "@keystatic/core/reader";
import keystaticConfig, {
  ministrySchema,
  committeeSchema,
} from "./keystatic.config";

type CommitteeType = Entry<typeof committeeSchema>;

type MinistryType = Entry<typeof ministrySchema>;

type ContentType = Entry<(typeof keystaticConfig)["collections"]["content"]>;

type VisionType = Entry<(typeof keystaticConfig)["singletons"]["vision"]>;

type SocialProvidersType =
  | "discord"
  | "instagram"
  | "facebook"
  | "email"
  | "linktree"
  | string;
