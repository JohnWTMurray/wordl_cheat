import $ from "jquery"
import data from "./data";


let game: JQuery<HTMLElement> = $('.game');
let rownumber: number = 1;

function add_row() {
	let r: HTMLDivElement = document.createElement('div');
	r.className = "row"; r.id = `row_${rownumber}`;
	game.append(r);
	for (let i = 0; i < 5; i++) {
		add_cell(i);
	}
	rownumber += 1;
}

function add_cell(index: number) {
	let cell: HTMLDivElement = document.createElement('div');
	cell.className = 'cell';
	cell.id = `cell_${index+1}`;
	$(`#row_${rownumber}`)[0].appendChild(cell);
	game.append();
}

function cell_factory(): Icell {
	return {
		status: 'grey', 
		letter: '',
		rotate: function() {
			if (this.status == 'grey') {
				this.status = 'amber'
			}
			else if (this.status == 'amber') {
				this.status = 'green'
			}
			else if (this.status == 'green') {
				this.status = 'grey';
			}
			let x: JQuery<HTMLElement> = $(`#row_${data.row} #cell_${data.letterindex}`);
			x.removeClass('grey green amber');
			x.addClass(this.status);
		}
	}
}

function generate_game_data(): void {
	let x: Icell[][] = []
	for (let k = 0; k < 5; k++) {
		let y: Icell[] = []
		for (let i = 0; i < 5; i++) {
			y.push(cell_factory());
		}
		x.push(y);
	}
	data.game = x;
}

export default function generate(): void {
	for (let i = 0; i < 5; i++) {
		add_row();
	}
	generate_game_data();
}