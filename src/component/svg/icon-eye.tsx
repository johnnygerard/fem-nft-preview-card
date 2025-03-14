import { memo, type SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const IconEye = memo((props: Props) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 9C14 9 5.46 15.22 2 24C5.46 32.78 14 39 24 39C34.01 39 42.54 32.78 46 24C42.54 15.22 34.01 9 24 9ZM24 34C18.48 34 14 29.52 14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34ZM18 24C18 20.69 20.69 18 24 18C27.31 18 30 20.69 30 24C30 27.31 27.31 30 24 30C20.69 30 18 27.31 18 24Z"
        fill="white"
      />
    </svg>
  );
});

IconEye.displayName = "IconEye";
