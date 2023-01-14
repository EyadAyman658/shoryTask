import { memo, useMemo } from "react";
import { useLandingContext } from "../../hooks/useLandingHook";
import { useStyles } from "./style";
const Movies = () => {
  const { selectedMovie, moviesList, handleSelectedMovie } =
    useLandingContext();
  const classes = useStyles();
  const handleSuperHeroList = useMemo(
    () => (
      <ul className={classes.movieList}>
        {moviesList.map((movie: any, index: number) => (
          <li
            //@ts-ignore
            onClick={() => handleSelectedMovie(movie)}
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
            />
          </li>
        ))}
      </ul>
    ),
    [moviesList, selectedMovie]
  );
  return <section className={classes.movieWrapper}>{handleSuperHeroList}</section>;
};
export default memo(Movies);
