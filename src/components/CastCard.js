import React from "react";

function CastCard({ name, character, img }) {
  return (
    <div className="cast-card">
      <img src={img} alt={name} />
      <div className="cast-name">{name}</div>
      <div className="cast-character">{character}</div>
    </div>
  );
}

export default CastCard;
