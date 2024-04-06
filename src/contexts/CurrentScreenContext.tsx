import {createContext, useContext} from 'react';

interface CurrentScreenContextProps {
  currentScreenName: string | undefined;
}

export const CurrentScreenContext = createContext<CurrentScreenContextProps>({
  currentScreenName: undefined,
});

export const useCurrentScreen = () => useContext(CurrentScreenContext);
