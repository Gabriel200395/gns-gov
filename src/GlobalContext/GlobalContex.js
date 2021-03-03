import { createContext } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  return (
    <CreateContextGlobal.Provider>{children}</CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
