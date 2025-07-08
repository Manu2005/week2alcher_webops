import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CastCard from "../components/CastCard";
import Header from "../components/Header";

function MovieDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state;

  if (!movie) {
    return (
      <div>
        <Header />
        <p>Movie not found.</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="detail-banner" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
        <div className="overlay">
          <img src={movie.poster_path} alt={movie.original_title} className="poster" />
          <div className="info">
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

      <section className="cast-section">
        <h2>Cast of {movie.original_title}</h2>
        <div className="cast-grid">
          {movie.casts?.map(
            (cast, i) =>
              cast.profile_path && (
                <CastCard key={i} name={cast.name} character={cast.character} img={cast.profile_path} />
              )
          )}
        </div>
      </section>
    </>
  );
}

export default MovieDetail;
