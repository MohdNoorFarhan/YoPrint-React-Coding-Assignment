import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchSearchResults } from './searchSlice';
import { useAppSelector } from '../../store/hooks';
//import { fetchAnimeDetails } from "./features/anime/animeSlice";
import React from "react";


type Anime = {
  mal_id: number;
  title: string;
  // add other properties if needed
};

const SearchPage: React.FC = () => {
  const animeState = useAppSelector((state) => state.anime); // might be undefined
  const list: Anime[] = animeState?.list || []; // ✅ safe access with fallback

  return (
    <div>
      <h1>Search Results</h1>
      {list.length === 0 ? (
        <p>No anime found.</p>
      ) : (
        <ul>
          {list.map((anime) => (
            <li key={anime.mal_id}>{anime.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;




