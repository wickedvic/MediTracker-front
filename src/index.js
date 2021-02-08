import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from './IndexUI'
import { ThemeProvider } from '@material-ui/core/styles';
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";



const store = createStore(rootReducer);
console.log("Store: ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
