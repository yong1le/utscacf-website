import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "./keystatic.config";

type CommitteeType = Entry<
  (typeof keystaticConfig)["collections"]["committee"]
>;

type MinistryType = Entry<(typeof keystaticConfig)["collections"]["ministry"]>;

type ChurchType = Entry<(typeof keystaticConfig)["collections"]["church"]>;

type VisionType = Entry<(typeof keystaticConfig)["singletons"]["vision"]>;

type SocialProvidersType =
  | "discord"
  | "instagram"
  | "facebook"
  | "email"
  | "linktree"
  | string;
