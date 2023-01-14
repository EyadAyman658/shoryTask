import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Configuration from "../../../services/Configuration";
import useApi from "../../../services/useApiFetching";
import { LandingInterface, defaultState ,LandingProviderProps} from "./index.interface";

const LandingContext = createContext<LandingInterface>(defaultState);

const LandingProvider: React.FC<LandingProviderProps> = ({ children }) =>
{  
  const superheroNames = [
    { id: 1, name: 'Spider-Man', image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg' },
    { id: 2, name: 'Iron Man', image: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg' },
    { id: 3, name: 'Captain America', image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg' },
    ];

  const { getRequest } = useApi();

  const [selectedMovie, setSelectedMovie] = useState(
    defaultState.selectedMovie
  );
  const [movieInfo, setMovieInfo] = useState(defaultState.movieInfo);
  const [loadingMovies, setloadingMovies] = useState(
    defaultState.loadingMovies
  );
  const [heroInput, setheroInput] = useState(defaultState.heroInput);
  const [moviesList, setMoviesList] = useState(defaultState.moviesList);

  const [selectedSuperHero,setSelectedSuperHero]=useState<string>('')

  const [step,setSteps]=useState<any>(defaultState.step)

  const handleSearchValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setheroInput(e.target.value);
    },
    []
  );

  

  const superHeroList = useCallback(
     (search:string) => {
       if(heroInput==='')   return superheroNames
       else  return superheroNames.filter(superhero => superhero?.name.toLowerCase().includes(search.toLowerCase()));
    },
    [heroInput]
  );

  const handleShowMovies=useCallback(async()=>{
    let res = await getRequest(`?s=${selectedSuperHero}&apikey=4f5efa4d`, true);
      if(res.data.Response==='False'){
        toast.error(res.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: "light",
        });
        setMoviesList([])
      }

      else{
        setMoviesList(res.data.Search)
      }
  },[selectedSuperHero])

 const handleSelectSuperHero=useCallback((superHero:any)=>{
  let name=superHero.name   
  setSelectedSuperHero(name)
 },[])
  
  const handleConfirmSuperHero=useCallback((event:any)=>{
   event.preventDefault()
   setSteps(2)
  },[])

  const handleSelectredMovie=useCallback(()=>{
  },[])
  useEffect(()=>{
    if(step===2)handleShowMovies()
  },[step])
  return (
    <LandingContext.Provider
      value={{
        // @ts-ignore
        selectedMovie,
        movieInfo,
        moviesList,
        loadingMovies,
        heroInput,
        selectedSuperHero, 
        step,       
        superHeroList,
        handleSearchValueChange,
        handleSelectSuperHero,
        handleConfirmSuperHero
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

const useLandingContext = () => React.useContext(LandingContext);

export { LandingProvider, LandingContext, useLandingContext };
