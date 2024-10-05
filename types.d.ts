export type CommitteeType = {
  name: string;
  roles: string[];
  handles: {
    provider: SocialProvidersType;
    href: string;
  }[];
  image: string?;
};

export type MinistryType = {
  name: string;
  description: string;
  image: string?;
};

export type EventType = {
  name: string;
  description: string;
  link: string;
  image: string?;
};

type ChurchType = {};

type VisionType = {};

type SocialProvidersType =
  | "discord"
  | "instagram"
  | "facebook"
  | "email"
  | "linktree"
  | string;
