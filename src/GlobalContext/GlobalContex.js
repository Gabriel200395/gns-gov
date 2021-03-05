import { createContext, useState } from "react";

export const CreateContextGlobal = createContext();

function GlobalContext({ children }) {
  // const [page, setPage] = useState(true);

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // function mudarPage() {
  //   setPage(!page);
  //   window.scrollTo(0, 0);
  // }

  return (
    <CreateContextGlobal.Provider>{children}</CreateContextGlobal.Provider>
  );
}

export default GlobalContext;
