import data from "./data";
import $ from "jquery";
import valid_word from "./valid_word";

export function arrow_down(): void {
	if (data.input.row < 5) {
		data.input.row += 1;
	}
	render_row();
	
}

export function arrow_up(): void {
	if (data.input.row > 1) {
		data.input.row -= 1;
	}
	render_row();
}

export function input_letter(letter: string) {
	$(`#row_${data.input.row} #cell_${data.input.letterindex}`).text(letter);
	data.input.word += letter;
	if (data.input.letterindex < 5) {
		data.input.letterindex += 1;
	}
}

export function submit() {
	console.log(data.input.word);
	if (valid_word(data.input.word)) {
		data.input.word = '';
		if (data.input.row < 5) {
			data.input.row += 1;
		}
		data.input.letterindex = 1;
		render_row();
	}
	else {
		alert('not a valid word');
	}
}



export function backspace() {
	if (data.input.letterindex >= 1) {
		$(`#row_${data.input.row} #cell_${data.input.letterindex}`).text("");
		data.input.word = data.input.word.substring(0, data.input.word.length - 1);
		data.input.letterindex = data.input.word.length;
		if (data.input.letterindex < 1) {
			data.input.letterindex = 1;
		}
	}
}

function render_row(): void {
	$(".selectedrow").removeClass("selectedrow");
	$(`#row_${data.input.row}`).addClass("selectedrow");
}

function render_cell() {

}