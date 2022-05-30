import words from "./words";


/* 
 
	A poor attempt to multi-thread a simple task.
	I could possibly refactor this using webtasks 
*/

// async function verify(start_index: number, word: string): Promise<boolean> {
// 	let limit = start_index + Math.round(words.length / 5);
// 	for (let i = start_index; i < limit; i++) {
// 		if (words[i].toUpperCase() == word) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// export async function valid_word(word: string): Promise<boolean> {
// 	let promises: Array<Promise<boolean>> = [];

// 	let increment = Math.round(words.length / 5);
// 	for (let i = 0; i < words.length - 1; i += increment) {
// 		promises.push(
// 			verify(i, word)
// 		);
// 	}

// 	return (await Promise.all(promises)).includes(true);
// }


export default function valid_word(word: string): boolean {
	return words.find(x => x == word) != undefined;
}