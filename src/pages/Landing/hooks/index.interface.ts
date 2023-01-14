export interface LandingInterface{
  moviesList:any[],
  loadingMovies:boolean,
  heroInput:string,
  movieInfo:{},
  selectedMovie:string,
  handleSearch?:()=>void,
  handleSearchValueChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

export  const defaultState={
   moviesList:[],
   loadingMovies:false,
   heroInput:'',
   movieInfo:{},
   selectedMovie:'',
   
}

export interface LandingProviderProps {
  children: any;
 }
  