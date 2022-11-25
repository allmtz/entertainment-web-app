
import {ReactComponent as HomeIcon} from '../assets/icon-nav-home.svg'  
import {ReactComponent as MovieIcon} from '../assets/icon-nav-movies.svg'  
import {ReactComponent as TvIcon} from '../assets/icon-nav-tv-series.svg'  
import {ReactComponent as BookmarkIconNav} from '../assets/icon-nav-bookmark.svg'  

export const Nav = ( ) => {

    return(
    <nav>
        <img className="site-logo" src="/assets/logo.svg" alt="site logo" />

        <ul>
          <li><HomeIcon /></li>
          <li><MovieIcon /></li>
          <li><TvIcon /></li>
          <li><BookmarkIconNav /></li>
        </ul>

        <img className="avatar" src="/assets/image-avatar.png" alt="avatar" />
      </nav>
    )
}