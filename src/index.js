import React from "react";
import ReactDOM from "react-dom";
import { GifExpertApp } from "./GiftExpertApp";

import "./index.css";

const divRoot = document.querySelector("#root");

//ReactDOM.render(<PrimeraApp value={"Hola soy Goku"} />, divRoot);

ReactDOM.render(<GifExpertApp />, divRoot);
