
interface Iinput {
	row: number
	letterindex: number
	word: string
}

interface Idata {
	input: Iinput
	row: number,
	letterindex: number,
	game: Icell[][]
}

interface Icell {
	status: "grey" | "amber" | "green",
	letter: string,
	rotate: () => void
}