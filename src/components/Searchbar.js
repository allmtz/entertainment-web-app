export const Searchbar = ({ handleSubmit, searchRef }) => {
  return (
    <section className="search-section">
      <img src="/assets/icon-search.svg" alt="Search icon" />
      <form onSubmit={handleSubmit}>
        <input ref={searchRef} type="text" placeholder="Search for movies" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
