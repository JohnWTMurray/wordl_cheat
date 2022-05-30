import $ from "jquery";
import { arrow_down, arrow_up, backspace, input_letter, submit } from "./cheat";
import data from "./data";


export function init_event_listeners() {
	$("body")[0].addEventListener('keydown', function(event) {
		switch (event.key) {
			case 'ArrowDown':
				arrow_down();
				break;
			case 'ArrowUp':
				arrow_up();
				break;
			case 'Backspace':
				backspace();
				break;
			default: 
				break;
		}
	});

	$("body")[0].addEventListener('keypress', function(event) {
		
		if (event.key == 'Enter') {
			submit();
		}
		else if (/[A-Za-z]/.test(event.key)) {
			input_letter(event.key.toUpperCase());
		}
	});

	$(".row").on('click', function() {
		if ($(this).hasClass('selectedrow') ) {
			if (!($(this).attr('id') == `row${data.row}`)) {
				$(this).removeClass('selectedrow');
			}
		}
		else {
			$('.row').removeClass('selectedrow');
			$(this).addClass('selectedrow');
			// data.row = parseInt( ($(this).attr('id')!)[4] );
		}
		// console.log(data); // diagnostic
	});

	$(".row .cell").on('click', function() {
		data.row = parseInt( ( $(this).parent().attr('id')!)[4] );
		data.letterindex = parseInt( ($(this).attr('id')!)[5] );
		data.game[data.row-1][data.letterindex-1].rotate();
	});
}
