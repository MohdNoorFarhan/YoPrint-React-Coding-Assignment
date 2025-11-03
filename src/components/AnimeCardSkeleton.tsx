import React from "react";
/*import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';*/

//const dispatch = useDispatch<AppDispatch>();


const AnimeCardSkeleton: React.FC = () => {
  return (
    <div className="border rounded p-2 animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-1 h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default AnimeCardSkeleton;
