import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import MovieCard from "./components/MovieCard";
import "./index.css";

const API_KEY = "e68b750f4319da9c53438c4e0c395ab3";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popularity.desc");
  const [loading, setLoading] = useState(false);

  async function fetchMovies() {
    setLoading(true);

    const endpoint = query.trim() !== "" ? "/search/movie" : "/discover/movie";
    const params = {
      api_key: API_KEY,
      page,
      include_adult: false,
      language: "en-US"
    };
    
    if (query) params.query = query;
    else params.sort_by = sort;

    const res = await axios.get(`${BASE_URL}${endpoint}`, { params });

    setMovies(res.data.results.slice(0, 20));
    setTotalPages(res.data.total_pages);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [page, query, sort]);

  return (
    <>
      <Header setQuery={setQuery} setSort={setSort} />
      <main id="movie-container">
        {loading
          ? <p style={{ textAlign:"center", padding:"2rem" }}>Loading...</p>
          : movies.map((m) => (
              <MovieCard key={m.id} movie={m} imageUrl={IMAGE_URL} />
            ))
        }
      </main>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
}
