import { useState } from "react";

type MovieCardProps = {
  title: string;
  rating: number;
};

export function MovieCard({ title, rating }: MovieCardProps) {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="movie-card">
      {title} - {rating}
      <br />
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "♥" : "♡"}
      </button>
    </div>
  );
}
