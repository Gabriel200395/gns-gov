import { createContext } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  return (
    <CreateContextGlobal.Provider value={{}}>
      {children}
    </CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
