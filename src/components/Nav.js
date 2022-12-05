import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIconNav } from "../assets/icon-nav-bookmark.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="site-logo" src="/assets/logo.svg" alt="site logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <MovieIcon />
          </Link>
        </li>
        <li>
          <Link to="/tv">
            <TvIcon />
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <BookmarkIconNav />
          </Link>
        </li>
      </ul>
      <img className="avatar" src="/assets/image-avatar.png" alt="avatar" />
    </nav>
  );
};
