import { createContext, useState, ReactNode } from "react";

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextProps {
  globalVariable: boolean;
  setGlobalVariable: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const [globalVariable, setGlobalVariable] = useState(false);

  return (
    <AppContext.Provider
      value={{
        globalVariable,
        setGlobalVariable,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
