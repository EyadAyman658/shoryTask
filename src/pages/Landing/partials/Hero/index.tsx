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
                  selectedSuperHero.name === hero.name ? classes.selectedText : ""
                }
              >
                {hero.name}
              </p>
              <img
                src={hero.image}
                alt={hero.name}
                className={
                  selectedSuperHero.name === hero.name ? classes.selected : ""
                }
              />
            </li>
          ))
        }
      </ul>
    ),
  // eslint-disable-next-line react-hooks/exhaustive-deps
    [superHeroList, heroInput, selectedSuperHero,handleSelectSuperHero]
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
        <Button
         className={classes.actionWrapper}
          variant="contained"
          type="submit"
          disabled={Object.keys(selectedSuperHero).length===0}
          children={"Submit "}
          onClick={handleConfirmSuperHero}
        />
    </section>
  );
};
export default memo(Hero);
