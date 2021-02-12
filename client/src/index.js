import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";

import './Components/common/images/favicon.ico';
import "./Components/common/css/font-awesome/all.min.css";
import "./Components/common/css/flaticon/flaticon.css";
import "./Components/common/css/bootstrap/bootstrap.min.css";
import "./Components/common/css/select2/select2.css";
import "./Components/common/css/range-slider/ion.rangeSlider.css";
import "./Components/common/css/owl-carousel/owl.carousel.min.css";
import "./Components/common/css/magnific-popup/magnific-popup.css";
import "./Components/common/css/style.css";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();