const fs = require('fs');
const path = require('path');
const { p } = require('../../utils/logger');

const data = fs.readFileSync(
	path.join(__dirname, '../../../', 'advent-of-code/2025/01-12-2025.txt'),
	'utf8'
);

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
		p.err(`Bad line at ${i}: "${line}"`);
		process.exit(1);
		return 1;
	}

	if (dir === 'L') {
		value = (value - (amount % N) + N) % N;
	} else if (dir === 'R') {
		value = (value + amount) % N;
	} else {
		p.err(`Unknown direction "${dir}" on line ${i}: "${line}"`);
		process.exit(1);
		return 1;
	}

	if (value === 0) {
		password += 1;
	}

	if (DEBUG) {
		p.log(`Line ${i}: ${line} -> value=${value} password=${password}`);
	}
});

p.warn('Password:', password);
