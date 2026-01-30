import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import clsx from "clsx";
import styles from "../DataTable.module.css";

type ActionListContextValue = {
  onAfterSelect?: () => void;
};

const ActionListContext = createContext<ActionListContextValue>({});

export function ActionListProvider({
  onAfterSelect,
  children,
}: {
  onAfterSelect?: () => void;
  children: ReactNode;
}) {
  return (
    <ActionListContext.Provider value={{ onAfterSelect }}>{children}</ActionListContext.Provider>
  );
}

export function ActionList({ children }: { children: ReactNode }) {
  return <div className={styles.actionList}>{children}</div>;
}

export function ActionListItem({
  onSelect,
  children,
  className,
}: {
  onSelect?: () => void;
  children: ReactNode;
  className?: string;
}) {
  const { onAfterSelect } = useContext(ActionListContext);
  return (
    <button
      type="button"
      className={clsx(styles.actionItem, className)}
      onClick={() => {
        onSelect?.();
        onAfterSelect?.();
      }}
    >
      {children}
    </button>
  );
}
