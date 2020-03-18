import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: "https://f8884243768e4c878bb294828597395f@sentry.io/5133986"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
