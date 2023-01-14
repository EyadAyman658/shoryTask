import {memo} from 'react'
import { TextField, Button } from "@material-ui/core";
import { useStyles } from './style';
import {useLandingContext} from '../../hooks/useLandingHook'
const Hero=()=>{
    const {handleSearch,heroInput,handleSearchValueChange}=useLandingContext()
    
    const classes=useStyles()
    return <section className={classes.heroWrapper}>
      <h1>Please enter your  Super Hero </h1>
      <div className={classes.heroContent}>
      <TextField
              id="outlined-basic"
              label={'Super Hero'}
              variant="outlined"
              autoComplete='off'
              value={heroInput}
              onChange={handleSearchValueChange}
            />
               <Button
              variant="contained"
              type="submit"
              children={'Submit '}
              onClick={handleSearch}
            />
      </div>
  
    </section>
}
export default memo(Hero)