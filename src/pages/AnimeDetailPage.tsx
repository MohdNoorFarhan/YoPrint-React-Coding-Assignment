// src/pages/AnimeDetailPage.tsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAnimeDetails } from "../features/anime/animeSlice";

const AnimeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedAnime, loading, error } = useAppSelector((state) => state.anime);

  useEffect(() => {
    if (id) {
      dispatch(fetchAnimeDetails(Number(id)));
    }
  }, [id, dispatch]);

  if (loading) return <p className="p-4 text-center">Loading anime details...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!selectedAnime) return <p className="p-4 text-gray-600">No anime found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to search
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={selectedAnime.images.jpg.image_url}
          alt={selectedAnime.title}
          className="w-64 rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{selectedAnime.title}</h1>
          <p className="text-gray-600 mb-2">⭐ Score: {selectedAnime.score || "N/A"}</p>
          <p className="text-gray-700 mb-4">{selectedAnime.synopsis}</p>

          <p className="text-sm text-gray-500">
            Episodes: {selectedAnime.episodes || "?"} | Year: {selectedAnime.year || "N/A"}
          </p>

          {selectedAnime.trailer?.url && (
            <a
              href={selectedAnime.trailer.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Watch Trailer
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
