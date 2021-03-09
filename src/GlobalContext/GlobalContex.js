import { createContext, useState } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  const [open, setOpen] = useState(true);

  const [active, setActive] = useState(null);

  function handleActive(classe) {
    setActive(classe);
  }

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
        handleActive,
        active,
        handleSubmit,
      }}
    >
      {children}
    </CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
