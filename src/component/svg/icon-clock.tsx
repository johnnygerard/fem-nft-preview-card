import { memo, type SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const IconClock = memo((props: Props) => {
  return (
    <svg viewBox="0 0 17 17" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63818 8.67388C1.63818 4.99199 4.62295 2.00722 8.30485 2.00722C10.073 2.00722 11.7687 2.7096 13.0189 3.95984C14.2691 5.21008 14.9715 6.90577 14.9715 8.67388C14.9715 12.3558 11.9867 15.3406 8.30485 15.3406C4.62295 15.3406 1.63818 12.3558 1.63818 8.67388ZM8.30485 9.34055H10.9715C11.3397 9.34055 11.6382 9.04207 11.6382 8.67388C11.6382 8.30569 11.3397 8.00722 10.9715 8.00722H8.97152V6.00722C8.97152 5.63903 8.67304 5.34055 8.30485 5.34055C7.93666 5.34055 7.63818 5.63903 7.63818 6.00722V8.67388C7.63818 9.04207 7.93666 9.34055 8.30485 9.34055Z"
        fill="currentColor"
      />
    </svg>
  );
});

IconClock.displayName = "IconClock";
