import clsx from "clsx";
import React, { ReactNode } from "react";

interface IButton {
  primary?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ primary, children, ...props }: IButton) => {
  return (
    <>
      <button
        className={clsx(
          primary
            ? "bg-Primary-100 text-White-20"
            : "border-[1px] border-Primary-100 text-Primary-100",
          "rounded-11xl px-6 py-3",
          "md:px-8 md:py-3",
          "big:py-4 big:px-10 big:text-5xl"
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
