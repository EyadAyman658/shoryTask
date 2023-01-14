import { memo, useMemo } from "react";
import { useLandingContext } from "../../hooks/useLandingHook";
import { useStyles } from "./style";
const Movies = () => {
  const { selectedMovie, moviesList } = useLandingContext();
  const classes = useStyles();
  const handleSuperHeroList = useMemo(
    () => (
      <ul className={classes.heroList}>
        {moviesList.map((movie: any, index: number) => (
          <li
            //@ts-ignore
            onClick={() => handleSelectSuperHero(hero)}
            key={movie.id || index}
          >
            <p
              className={
                selectedMovie === movie.Title ? classes.selectedText : ""
              }
            >
              {movie.Title}
            </p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className={selectedMovie === movie.Title ? classes.selected : ""}
            />
          </li>
        ))}
      </ul>
    ),
    [moviesList]
  );
  return <>{handleSuperHeroList}</>;
};
export default memo(Movies);
