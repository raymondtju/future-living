import React from "react";

import { PropsWithChildren } from "react";

function Layout({
  children,
}: {
  children: PropsWithChildren<React.ReactNode>;
}) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-6 md:mx-8 lg:mx-[120px]">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
