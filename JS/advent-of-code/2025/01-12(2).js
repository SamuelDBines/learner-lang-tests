const fs = require('fs');

const data = fs.readFileSync('./01-12-2025.txt', 'utf8');

const lines = data
	.trim()
	.split(/\r?\n/)
	.map((line) => line.trim())
	.filter(Boolean);

const DEBUG = process.argv.includes('--debug');

const startingPosition = 50;
const N = 100;

let password = 0;
let value = startingPosition;

lines.forEach((line, i) => {
	const dir = line[0];
	const amount = parseInt(line.slice(1).trim(), 10);

	if (Number.isNaN(amount)) {
		throw new Error(`Bad line at ${i}: "${line}"`);
	}

	const step = dir === 'L' ? -1 : dir === 'R' ? 1 : null;
	if (step === null) {
		throw new Error(`Unknown direction "${dir}" on line ${i}: "${line}"`);
	}

	for (let k = 0; k < amount; k++) {
		value = (value + step + N) % N; // one click

		if (value === 0) {
			password += 1; // count EVERY time we land on 0
		}
	}

	if (DEBUG) {
		console.log(`Line ${i}: ${line} -> value=${value} password=${password}`);
	}
});

console.log('Password:', password);
