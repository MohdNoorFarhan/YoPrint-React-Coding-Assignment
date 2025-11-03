// src/types.ts
export interface Anime {
  mal_id: number;
  url: string;
  images?: {
    jpg?: { image_url?: string };
    webp?: { image_url?: string };
  };
  title: string;
  synopsis?: string | null;
  type?: string;
  episodes?: number | null;
  score?: number | null;
  year?: number | null;
}

export interface JikanPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface JikanSearchResponse {
  data: Anime[];
  pagination?: JikanPagination;
}
