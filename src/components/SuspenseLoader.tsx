import React, { Suspense } from "react";

const SuspenseLoader = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<p className="game_error">Loading...</p>}>{children}</Suspense>;
};

export default SuspenseLoader;
