import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// redux
import { createStoreHook, Provider } from "react-redux";
const store = createStoreHook
ReactDOM.render(
<Provider store={store}/>
    <App />
</Provider>,
 document.getElementById("root"));
