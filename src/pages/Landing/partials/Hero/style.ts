import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: any) => ({
  heroWrapper: {
    width:'100%',
  },
  heroContent:{
    width:'inherit',
    display:'flex',
    alignItems:'center',
    '& button':{
      margin:'10px'
    }
  }

}));
