import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAnimeList } from "../features/anime/animeSlice";
import { Link } from "react-router-dom";
import { ReactReduxContext } from "react-redux";

//console.log("Redux context test:", React.useContext(require('react-redux').ReactReduxContext));

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const animeState = useAppSelector((state) => state.anime as any);
  const list = animeState.list ?? [];
  const pagination = animeState.pagination ?? { current_page: 1, last_visible_page: 1, has_next_page: false };
  const loading = animeState.loading ?? false;
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const state = useAppSelector((state) => state);
  const context = React.useContext(ReactReduxContext);
  console.log("React version:", React.version);
  console.log("Redux context:", context);
  console.log("Redux state:", state);

  // Debounced search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        dispatch(fetchAnimeList({ query, page }));
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, page, dispatch]);

  const handleNextPage = () => {
    if (pagination.has_next_page) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (pagination.current_page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <input
        type="text"
        placeholder="Search anime..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => {
          setPage(1); // reset to first page on new query
          setQuery(e.target.value);
        }}
      />

      {loading && <p className="mt-3 text-center">Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {list.map((anime: { mal_id: React.Key | null | undefined; images: { jpg: { image_url: string | undefined; }; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => (
          <Link
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="border rounded p-2 block hover:shadow-lg transition"
          >
            <img
              src={anime.images.jpg.image_url}
              alt={typeof anime.title === "string" ? anime.title : String(anime.title ?? "")}
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-2 text-sm font-semibold">{anime.title}</h3>
          </Link>
        ))}
      </div>

      {list.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            disabled={pagination.current_page === 1}
            onClick={handlePrevPage}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            ← Prev
          </button>
          <span>
            Page {pagination.current_page} of {pagination.last_visible_page}
          </span>
          <button
            disabled={!pagination.has_next_page}
            onClick={handleNextPage}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </div>
    );
};



export default SearchPage;
