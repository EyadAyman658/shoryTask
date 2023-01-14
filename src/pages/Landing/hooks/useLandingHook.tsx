import React, { createContext, useCallback, useState } from "react";
import { toast } from "react-toastify";
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

  const [selectedMovie, setSelectedMovie] = useState<any>(defaultState.selectedMovie);
  const [loadingMovies, setloadingMovies] = useState(
    defaultState.loadingMovies
  );
  const [heroInput, setheroInput] = useState(defaultState.heroInput);
  const [moviesList, setMoviesList] = useState(defaultState.moviesList);
  const [selectedSuperHero,setSelectedSuperHero]=useState<string>('')
  const [loadingSelectedMovie,setLoadingloadingSelectedMovie]=useState(defaultState.loadingSelectedMovie)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [heroInput]
  );

  const handleShowMovies=useCallback(async()=>{
    setloadingMovies(true)
    //@ts-ignore
    let res = await getRequest(`?s=${selectedSuperHero?.name}&apikey=4f5efa4d`, true);
      if(res?.Response==='False'){
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
        setMoviesList(res?.Search)
      }
      setloadingMovies(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedSuperHero])


 const handleSelectSuperHero=useCallback((superHero:any)=>{
  setSelectedSuperHero(superHero)
 },[])
  
  const handleConfirmSuperHero=useCallback((event:any)=>{
   event.preventDefault()
   setSteps(2)
   handleShowMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedSuperHero])

  const handleSelectedMovie=useCallback(async(movie:any)=>{
    setLoadingloadingSelectedMovie(true)
      let res = await getRequest(`?i=${movie.imdbID}&apikey=4f5efa4d`, true);
      if(res?.Response==='False'){
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
        setSelectedMovie({})
      }
      else{
        setSelectedMovie(res)
      }
      setLoadingloadingSelectedMovie(false)
      setSteps(3)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleRepeat=useCallback((type:string)=>{
      if (type==='Hero') setSteps(1)
      else  setSteps(2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[step])
  
  return (
    <LandingContext.Provider
      value={{
        // @ts-ignore
        selectedMovie,
        moviesList,
        loadingMovies,
        heroInput,
        loadingSelectedMovie,
        selectedSuperHero, 
        step,       
        superHeroList,
        handleSearchValueChange,
        handleSelectSuperHero,
        handleConfirmSuperHero,
        handleSelectedMovie,
        handleRepeat
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

const useLandingContext = () => React.useContext(LandingContext);

export { LandingProvider, LandingContext, useLandingContext };
