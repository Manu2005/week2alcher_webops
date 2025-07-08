import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.movie_id}`, { state: movie });
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.poster_path} alt={movie.original_title} />
      <h3>{movie.original_title}</h3>
    </div>
  );
}

export default MovieCard;
