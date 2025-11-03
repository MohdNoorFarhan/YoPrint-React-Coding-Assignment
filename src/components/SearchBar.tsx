// src/components/SearchBar.tsx
import React from "react";
/*import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';*/

//const dispatch = useDispatch<AppDispatch>();

interface Props {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "Search anime...",
}) => {
  return (
    <input
      aria-label="Search anime"
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ padding: "8px 12px", width: "100%", fontSize: 16 }}
    />
  );
};
