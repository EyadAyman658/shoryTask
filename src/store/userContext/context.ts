import { createContext } from "react";

import { State, StoreApi } from "./index.interface";

export const initialState: State = {
  lang: localStorage.getItem("i18nextLng"),
  movies:'',
};

export default createContext<StoreApi>({
  userState: initialState,
  // @ts-ignore
  setUserContext: (state: State) => state,
});
