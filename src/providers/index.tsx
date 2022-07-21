import { createContext } from 'react';
import { ProviderProps } from './ProviderProps';

export const MainContext = createContext<any>({} as any);

export const MainProvider = ({ children }: ProviderProps) => {
  return (
    <MainContext.Provider value={{}}>
      {children}
    </MainContext.Provider>
  )
}