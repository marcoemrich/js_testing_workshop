import React from "react";
import ReactDOM from "react-dom";
import {Board, Cell, TicTacToe} from './tic_tac_toe'


const App = document.getElementById("app");

ReactDOM.render(<Board x="3" y="3" />, App);
