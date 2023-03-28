import clsx from "clsx";
import React from "react";

interface ILabel {
  name: string;
  value: string;
}

const Label = ({ ...props }: ILabel) => {
  return (
    <div>
      <p
        className={clsx(
          "text-Secondary-100",
          "text-xs",
          "md:text-sm",
          "big:text-7xl"
        )}
      >
        {props.name}
      </p>
      <span
        className={clsx(
          "font-medium text-Black-100",
          "pt-1 text-lg",
          "md:text-4xl",
          "big:text-10xl"
        )}
      >
        {props.value}
      </span>
    </div>
  );
};

export default Label;
