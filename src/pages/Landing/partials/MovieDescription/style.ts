import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: any) => ({
  movieDescriptionWrapper: {
    padding: "20px",
    "& img": {
      borderRadius: 10,
    },
  },
  paperWrapper: {
    width: "50%",
    margin: "20px 0",
    padding: "10px",
    "& h4": {
      margin: "10px 0",
    },
    "& .MuiPaper-elevation2": {
      padding: "10px",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  actionWrapper: {
    "& button": {
      margin: "0px 0px 0px 20px",
    },
  },
  buttonWrapper: {
    '&.MuiButton-contained':{
        backgroundColor: "Green",
        color: "#fff",
        "&:hover": {
            opacity: 0.8,
            backgroundColor: "Green",
          },
    }
   
  },
}));
