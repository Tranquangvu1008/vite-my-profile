// File này sẽ import reducer và initialState từ file reducer.ts
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import reducer, { initialState } from './Reducer';

type ProviderProps = {
  children: ReactNode;
};

export const StateContext = createContext<[any, React.Dispatch<any>]>([initialState, () => null]);

export const StateProvider = ({ children }: ProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
