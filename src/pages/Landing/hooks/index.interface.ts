export interface LandingInterface {
  moviesList: any[];
  loadingMovies: boolean;
  heroInput: string;
  movieInfo: {};
  selectedMovie: string;
  selectedSuperHero?: string;
  step: number;
  superHeroList?: (search: string) => any[];
  handleSearchValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectSuperHero?: Function;
  handleConfirmSuperHero?: (e:any) => void;
  handleSelectedMovie?:(movie:any)=>void
}

export const defaultState = {
  moviesList: [],
  loadingMovies: false,
  heroInput: "",
  movieInfo: {},
  selectedMovie: "",
  selectedSuperHero: "",
  step: 1,
};

export interface LandingProviderProps {
  children: any;
}
