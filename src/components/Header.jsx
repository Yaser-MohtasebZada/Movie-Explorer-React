export default function Header({ setQuery, setSort }) {
  return (
    <header className="site-header">
      <h1>Movie Explorer</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="release_date.asc">Release Date (Asc)</option>
          <option value="release_date.desc">Release Date (Desc)</option>
          <option value="vote_average.asc">Rating (Asc)</option>
          <option value="vote_average.desc">Rating (Desc)</option>
        </select>
      </div>
    </header>
  );
}
