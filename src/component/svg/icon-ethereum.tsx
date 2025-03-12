import { memo, type SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const IconEthereum = memo((props: Props) => {
  return (
    <svg viewBox="0 0 11 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 0L10.9961 9.16875L5.5 12.4312L0 9.16875L5.5 0ZM11 10.2165L5.5 18L0 10.2165L5.5 13.479L11 10.2165Z"
        fill="currentColor"
      />
    </svg>
  );
});

IconEthereum.displayName = "IconEthereum";
