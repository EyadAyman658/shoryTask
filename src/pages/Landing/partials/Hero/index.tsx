import { memo, useMemo } from "react";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useLandingContext } from "../../hooks/useLandingHook";
const Hero = () => {
  const {
    superHeroList,
    heroInput,
    handleSearchValueChange,
    handleSelectSuperHero,
    selectedSuperHero,
    handleConfirmSuperHero,
  } = useLandingContext();

  const classes = useStyles();
  const handleSuperHeroList = useMemo(
    () => (
      <ul className={classes.heroList}>
        {
          //@ts-ignore
          superHeroList(heroInput).map((hero: any, index: number) => (
            <li
                        //@ts-ignore
              onClick={() => handleSelectSuperHero(hero)}
              key={hero.id || index}
            >
              <p
                className={
                  selectedSuperHero === hero.name ? classes.selectedText : ""
                }
              >
                {hero.name}
              </p>
              <img
                src={hero.image}
                alt={hero.name}
                className={
                  selectedSuperHero === hero.name ? classes.selected : ""
                }
              />
            </li>
          ))
        }
      </ul>
    ),
    [superHeroList, heroInput, selectedSuperHero]
  );
  return (
    <section className={classes.heroWrapper}>
      <h1>Please select your Super Hero </h1>
      <div className={classes.heroContent}>
        <TextField
          id="outlined-basic"
          label={"Super Hero"}
          variant="outlined"
          autoComplete="off"
          value={heroInput}
          onChange={handleSearchValueChange}
        />
      </div>
      {handleSuperHeroList}
      <div>
        <Button
          variant="contained"
          type="submit"
          children={"Submit "}
          onClick={handleConfirmSuperHero}
        />
      </div>
    </section>
  );
};
export default memo(Hero);
