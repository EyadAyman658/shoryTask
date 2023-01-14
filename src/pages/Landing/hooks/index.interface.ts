export interface LandingInterface {
  moviesList: any[];
  loadingMovies: boolean;
  heroInput: string;
  selectedMovie: any;
  selectedSuperHero?: any;
  step: number;
  loadingSelectedMovie:boolean;
  superHeroList?: (search: string) => any[];
  handleSearchValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectSuperHero?: Function;
  handleConfirmSuperHero?: (e:any) => void;
  handleSelectedMovie?:(movie:any)=>void;
  handleRepeat?:(type:string)=>void

}

export const defaultState = {
  moviesList: [],
  loadingMovies: true,
  heroInput: "",
  selectedMovie: "",
  selectedSuperHero: "",
  step: 1,
  loadingSelectedMovie:true
};

export interface LandingProviderProps {
  children: any;
}
