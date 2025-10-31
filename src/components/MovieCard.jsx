export default function MovieCard({ movie, imageUrl }) {
  const poster = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : "";

  return (
    <div className="movie">
      {poster ? (
        <img src={poster} alt={movie.title} />
      ) : (
        <div style={{height:"320px",background:"#eee",margin:"10px",borderRadius:"8px"}}></div>
      )}
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date || "—"}</p>
      <p>Rating: {(movie.vote_average ?? 0).toFixed(1)}</p>
    </div>
  );
}
