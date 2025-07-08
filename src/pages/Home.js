import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

const API_URL = "https://jsonfakery.com/movies/paginated";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}?page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data))
      .catch((err) => console.error("Failed to load movies:", err));
  }, [page]);

  return (
    <>
      <Header />
      <h2 className="section-title">Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          &laquo; Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next &raquo;</button>
      </div>
    </>
  );
}

export default Home;
