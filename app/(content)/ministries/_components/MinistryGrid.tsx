import React from "react";

const MinistryGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-1 gap-16 xl:gap-28">{children}</div>;
};

export default MinistryGrid;
