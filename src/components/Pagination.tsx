// src/components/Pagination.tsx
import React from "react";
/*import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';*/

//const dispatch = useDispatch<AppDispatch>();

interface Props {
  current: number;
  last?: number;
  onPage: (n: number) => void;
  hasNext?: boolean;
}

export const Pagination: React.FC<Props> = ({
  current,
  last,
  onPage,
  hasNext = false,
}) => {
  const prevDisabled = current <= 1;
  const nextDisabled = !(hasNext || (last !== undefined && current >= last));

  return (
    <div
      style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}
    >
      <button onClick={() => onPage(current - 1)} disabled={prevDisabled}>
        Prev
      </button>
      <div>
        Page {current}
        {last ? ` / ${last}` : ""}
      </div>
      <button onClick={() => onPage(current + 1)} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
};
