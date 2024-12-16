import { useContext, useState } from "react";
import { createContext } from "react";

// CREAZIONE CONTESTO
const BoolflixContext = createContext();

// CONSUMER
export const useBoolflixContext = () => useContext(BoolflixContext);

// PROVIDER
export const BoolflixProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <BoolflixContext.Provider value={data}>{children}</BoolflixContext.Provider>
  );
};
