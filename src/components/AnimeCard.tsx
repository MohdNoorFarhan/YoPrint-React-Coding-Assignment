// src/components/AnimeCard.tsx
import React from "react";
import type { Anime } from "../types";
import { Link } from "react-router-dom";
/*import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';*/

/*const dispatch = useDispatch<AppDispatch>();
const searchResults = useSelector((state: RootState) => state.search.results);*/


export const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }) => {
  const img =
    anime.images?.jpg?.image_url || anime.images?.webp?.image_url || "";
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        gap: 12,
      }}
    >
      <img
        src={img}
        alt={anime.title}
        style={{ width: 120, height: 160, objectFit: "cover", borderRadius: 6 }}
      />
      <div>
        <h3 style={{ margin: 0 }}>
          <Link to={`/detail/${anime.mal_id}`}>{anime.title}</Link>
        </h3>
        <p style={{ marginTop: 8, marginBottom: 8, maxWidth: 420 }}>
          {anime.synopsis
            ? anime.synopsis.slice(0, 180) +
              (anime.synopsis.length > 180 ? "…" : "")
            : "No synopsis"}
        </p>
        <div style={{ fontSize: 13, color: "#666" }}>
          <span>{anime.type || "—"}</span> ·{" "}
          <span>{anime.episodes ?? "?"} eps</span> ·{" "}
          <span>Score: {anime.score ?? "—"}</span>
        </div>
      </div>
    </div>
  );
};
