import { createContext, useState } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  const [open, setOpen] = useState(true);

  function dropMenu() {
    setOpen(!open);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <CreateContextGlobal.Provider
      value={{
        open,
        dropMenu,
        handleSubmit,
      }}
    >
      {children}
    </CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
