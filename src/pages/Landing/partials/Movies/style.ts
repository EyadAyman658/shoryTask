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
  },
  heroList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    listStyle: 'none',
    '& li': {
        margin: '0 15px 0',
        cursor: 'pointer',
        '& img': {
            transition: 'transform 0.3s ease-in-out',
            borderRadius:5
        },
    },
},
selected: {
  transform: 'scale(1.2)',
  margin: '5px 0'
},
selectedText: {
    color: 'green',
},
actionWrapper:{
  width:'100%',
  alignItems:'flex-end'
}
  
}));
