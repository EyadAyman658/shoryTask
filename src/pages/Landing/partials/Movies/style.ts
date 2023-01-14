import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: any) => ({
  movieWrapper: {
   padding:'20px'
  },
  heroContent:{
    width:'inherit',
    display:'flex',
    alignItems:'center',
    '& button':{
      margin:'10px'
    }
  },
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    listStyle: 'none',
    '& li': {
        margin: '0 25px 0',
        cursor: 'pointer',
        '& img': {
          transition: 'transform 0.3s ease-in-out',
          borderRadius:5,
          width:'300px',
          objectFit:'contain',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }
       
    },
},


selectedText: {
    color: 'green',
},
actionWrapper:{
  width:'100%',
  alignItems:'flex-end'
}
  
}));
