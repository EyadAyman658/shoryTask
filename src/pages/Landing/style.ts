import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: any) => ({
  pageWrapper: {
    width: "100vw",
    minHeight:'100vh',
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'column',
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

}));
