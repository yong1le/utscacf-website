import { Button } from "@/components/ui/button";
import { SocialProvidersType } from "@/types";
import Link from "next/link";
import React, { ComponentProps } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

type PropsType = {
  href: string;
  provider: SocialProvidersType;
} & ComponentProps<typeof Button>;

const getIcon = (provider: SocialProvidersType) => {
  switch (provider) {
    case "discord":
      return <FaDiscord />;
    case "instagram":
      return <FaInstagram />;
    case "facebook":
      return <FaFacebook />;
    case "email":
      return <FaEnvelope />;
    case "linktree":
      return <SiLinktree />;
    default:
      return <FaLink />;
  }
};

const SocialIcon = ({ href, provider, ...buttonProps }: PropsType) => {
  return (
    <Button asChild {...buttonProps}>
      <Link href={href}>{getIcon(provider)}</Link>
    </Button>
  );
};

export default SocialIcon;
