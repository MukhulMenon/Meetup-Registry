import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups-Registry </div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetups</Link>
        </li>
        <li>
          <Link to="/favourites">
            Favourites
            <span className={classes.badge}>
              {favouritesCtx.totalFavourites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
