import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <img src="/assets/logo.svg" alt="site logo" />

        <ul>
          <img src="/assets/icon-nav-home.svg" alt="Home link" />
          <img src="/assets/icon-nav-movies.svg" alt="Movies link" />
          <img src="/assets/icon-nav-tv-series.svg" alt="TV series link" />
          <img src="/assets/icon-nav-bookmark.svg" alt="Bookmark link" />
        </ul>

        <img className="avatar" src="/assets/image-avatar.png" alt="avatar" />
      </nav>

      <main>
        <section className="search-section">
          <img src="/assets/icon-search.svg" alt="Search icon" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for movies or TV series"
          />
        </section>

        <section className="trending">
          <h2>Trending</h2>

          <div className="trending-carousel">
            <div className="trending-card">
              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
              <div className="rating">PG</div>
            </div>

            <div className="trending-card">
              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
              <div className="rating">PG</div>
            </div>

            <div className="trending-card">
              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
              <div className="rating">PG</div>
            </div>

            <div className="trending-card">
              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
              <div className="rating">PG</div>
            </div>

            <div className="trending-card">
              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
              <div className="rating">PG</div>
            </div>
          </div>
        </section>

        <section className="recommended">
          <h2>Recommended for you</h2>

          <div className="recommended-container">
            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>

            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>

            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>

            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>

            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>

            <div className="recommended-card">
              <div className="recommended-thumbnail">
                <div className="bookmark-container">
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </div>
              </div>
              <div className="recommended-movie-info">
                <div className="row">
                  <p>2019</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>Movie</p>
                  <p>•</p>
                  <p>E</p>
                </div>
                <h1>Beyond Earth</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
