import React from "react";

import 'tachyons' ;
import ReactDOM from "react-dom/client";
import "./index.css";


import App from './containers/App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
    <App/>
    </div>
  </React.StrictMode>
);



