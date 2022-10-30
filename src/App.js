import "./App.css";
import { RecommendedCard } from "./RecommendedCard";
import { TrendingCard } from "./TrendingCard";

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
            <TrendingCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/below-echo/regular/medium.jpg" />
            <TrendingCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/van-life/regular/medium.jpg" />
            <TrendingCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/dogs/regular/medium.jpg" />
            <TrendingCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/unresolved-cases/regular/medium.jpg" />
            <TrendingCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/the-heiress/regular/medium.jpg" />
          </div>
        </section>

        <section className="recommended">
          <h2>Recommended for you</h2>
          <div className="recommended-container">
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/1998/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/asia-in-24-days/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/bottom-gear/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/mission-saturn/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/no-land-beyond/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/the-rockies/regular/medium.jpg" />
            <RecommendedCard category={"Movie"} title={"Good Title"} releaseDate={"2020"} rating={"PG"} thumbnailPath="assets/thumbnails/the-tasty-tour/regular/medium.jpg" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
