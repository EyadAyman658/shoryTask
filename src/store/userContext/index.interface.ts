export default interface Props {
  children: React.ReactNode[];
}

export interface State {
  movies:string
  lang: any;
}

export type StoreApi = {
  userState: State;
  setUserContext: React.Dispatch<React.SetStateAction<State>>;
};
