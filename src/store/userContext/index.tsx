import React, { useEffect } from 'react';
import Store, { initialState } from './context';
import Props, { State } from './index.interface';

const StoreProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [userState, setUserContext] = React.useState<State>(initialState);
  // handle Change region function
  // handle change lang function
  // handle check cache and context 

  // use effect to check the context if empty set from cache 
  return (
    <Store.Provider
      value={{
        userState,
        // @ts-ignore
        setUserContext
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;
