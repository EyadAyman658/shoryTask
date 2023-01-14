import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Configuration from "../../../services/Configuration";
import useApi from "../../../services/useApiFetching";
import { LandingInterface, defaultState ,LandingProviderProps} from "./index.interface";

const LandingContext = createContext<LandingInterface>(defaultState);

const LandingProvider: React.FC<LandingProviderProps> = ({ children }) =>
{  const { getRequest } = useApi();

  const [selectedMovie, setSelectedMovie] = useState(
    defaultState.selectedMovie
  );
  const [movieInfo, setMovieInfo] = useState(defaultState.movieInfo);
  const [loadingMovies, setloadingMovies] = useState(
    defaultState.loadingMovies
  );
  const [heroInput, setheroInput] = useState(defaultState.heroInput);
  const [moviesList, setMoviesList] = useState(defaultState.moviesList);

  const superheroNames = ["Batman", "Superman", "Wonder Woman","Iron Man","Thor"];

  const handleSearchValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setheroInput(e.target.value);
    },
    []
  );

  const handleSearch = useCallback(
    async () => {
      let res = await getRequest(`?s=${heroInput}&apikey=4f5efa4d`, true);
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
      }

      else{
        setMoviesList(res.data.Search)
      }
    },
    [heroInput]
  );

  
  return (
    <LandingContext.Provider
      value={{
        // @ts-ignore
        selectedMovie,
        movieInfo,
        moviesList,
        loadingMovies,
        heroInput,
        
        handleSearch,
        handleSearchValueChange
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

const useLandingContext = () => React.useContext(LandingContext);

export { LandingProvider, LandingContext, useLandingContext };
