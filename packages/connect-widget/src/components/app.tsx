import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import { HomePage } from "../routes/home/Home";
import { BanksPage } from "../routes/banks/Banks";
import { StatusPage } from "../routes/status/Status";
import { FormPage } from "../routes/form/Form";
import { AccountPage } from "../routes/account/Account";

import { Provider } from "../context/Context";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Provider>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/banks" component={BanksPage} />
          <Route path="/status" component={StatusPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/account" component={AccountPage} />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
