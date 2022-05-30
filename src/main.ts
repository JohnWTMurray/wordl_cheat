import './style.css';
import generate from './generate_game';
import $ from "jquery";
import data from "./data";
import words from "./words";
import valid_word from './valid_word';
import { init_event_listeners } from "./event_listeners";

// Initialization
generate();
init_event_listeners();


$(".log").on('click', () => {
	console.log(data); // stop
});



// update row.