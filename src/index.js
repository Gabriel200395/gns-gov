import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/rawline.css";
import NovaEdicao from "./Page/NovaEdicao";
import Bemvindo from "./Page/BemVindo";
import RevisaoFinalizacao from "./Page/RevisaoFinalizacao";

import GlobalContext from "./GlobalContext/GlobalContex";

ReactDOM.render(
  <BrowserRouter>
    <GlobalContext>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/NovaEdicao" component={NovaEdicao} />
        <Route path="/bemvindo" component={Bemvindo} />
        <Route path="/RevisaoFinalizacao" component={RevisaoFinalizacao} />
      </Switch>
    </GlobalContext>
  </BrowserRouter>,
  document.getElementById("root")
);
