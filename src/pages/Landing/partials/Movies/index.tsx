import { memo, useMemo } from "react";
import { useLandingContext } from "../../hooks/useLandingHook";
import { useStyles } from "./style";
const Movies = () => {
  const {  moviesList, handleSelectedMovie,loadingMovies } =
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
            <p>
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [moviesList,handleSelectedMovie]
  );
  if (loadingMovies) return <div> Loading</div>
  return <section className={classes.movieWrapper}>{handleSuperHeroList}</section>;
};
export default memo(Movies);
