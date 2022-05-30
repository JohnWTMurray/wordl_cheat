/* 
	DISCLAIMER:

	this is a separate codebase that runs on node. 

	It does NOT work with the rest of the project.
	it does NOT run on a web browser.

	It is a one time only script that is used to create 'words.ts'
	it is also not kept in a nice way.
*/

import { readFileSync, writeFileSync } from "fs";
import path from "path";

writeFileSync(
	path.join(__dirname, "words.ts"), 
	JSON.stringify(
		readFileSync(
			path.join(__dirname, './wordlist')
		).toString().toUpperCase().split('\n').filter(word => {
			return /[A-Z]/g.test(word) && !/[-]/.test(word) && word.length == 6;
		}).map(word => {
			return word.substring(0, word.length - 1);
		})
	)
);