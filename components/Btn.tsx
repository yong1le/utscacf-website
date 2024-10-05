import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Btn = ({
  href = null,
  className = "",
  children,
  variant = "ghost",
}: {
  href?: string | null;
  className?: string;
  children: React.ReactNode;
  variant?: string;
}) => {
  return (
    <Button asChild className={className} variant={variant}>
      {href !== null ? (
        <Link href={href}>{children}</Link>
      ) : (
        <div>{children}</div>
      )}
    </Button>
  );
};

export default Btn;
