import { createContext, useState } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  const [open, setOpen] = useState(true);

  function dropMenu() {
    setOpen(!open);
  }

  return (
    <CreateContextGlobal.Provider value={{ open, dropMenu }}>
      {children}
    </CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
