import React from "react";
import ReactDOM from "react-dom/client";
import store  from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = URL;  


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider  domain={domain}
    clientId={clientId}
    authorizationParams={{redirect_uri: window.location.origin
    }}>
  <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </Auth0Provider>
);
