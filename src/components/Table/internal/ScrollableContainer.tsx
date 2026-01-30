import type { HTMLAttributes } from "react";
import clsx from "clsx";

export function ScrollableContainer({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(className)} {...rest}>
      {children}
    </div>
  );
}
