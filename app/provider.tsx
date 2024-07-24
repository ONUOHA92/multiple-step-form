"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ContextState {
  step: number;
}

interface ContextValue {
  state: ContextState;
  setState: Dispatch<SetStateAction<ContextState>>;
}

const Context = createContext<ContextValue | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<ContextState>({
    step: 0,
  });

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { Context, MyProvider };
