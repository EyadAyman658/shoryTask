import { memo } from "react";
import { useLandingContext } from "../../hooks/useLandingHook";
import { useStyles } from "./style";
import { Paper, Typography, Grid, Button } from "@material-ui/core";

const MovieDescription = () => {
  const classes = useStyles();
  const {
    selectedMovie,
    loadingSelectedMovie,
    selectedSuperHero,
    handleRepeat,
  } = useLandingContext();

  if (loadingSelectedMovie) return <>Loading</>;
  return (
    <div className={classes.movieDescriptionWrapper}>
      <section>
        <Typography variant="h4">Selected Super Hero</Typography>
        <Typography variant="h6">{selectedMovie.Title}</Typography>
        <img src={selectedSuperHero?.image} alt={selectedMovie.Title} />
      </section>

      <section className={classes.paperWrapper}>
        <Typography variant="h4">Movie Description</Typography>
        <Paper elevation={2}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">{selectedMovie.Title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Released: {selectedMovie.Released}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{selectedMovie.Plot}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Ratings:</Typography>
              {selectedMovie.Ratings.map((rating: any, index: number) => (
                <Typography key={index}>
                  {rating.Source}: {rating.Value}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </section>

      <section className={classes.actionWrapper}>
        <Button
        variant="outlined"
          type="submit"
          disabled={Object.keys(selectedSuperHero).length === 0}
          children={"Change Hero"}
          onClick={() => handleRepeat && handleRepeat("Hero")}
          />

        <Button
          variant="contained"
          type="submit"
          className={classes.buttonWrapper}
          disabled={Object.keys(selectedSuperHero).length === 0}
          children={"Change Movie"}
          onClick={() => handleRepeat && handleRepeat("Movie")}
          />
      </section>
    </div>
  );
};
export default memo(MovieDescription);
