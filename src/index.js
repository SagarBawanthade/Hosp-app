import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-e6mc5d5tfq0ft6iw.us.auth0.com"
    clientId="2y7Y2hHpGWLnmZhWkmHygAJbzij43Qtk"
    authorizationParams={{redirect_uri: window.location.origin}}>
      <App />
      </Auth0Provider>
);

