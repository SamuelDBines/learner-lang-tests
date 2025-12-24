const BLUE = '\x1b[34m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

const isObjectOrArray = (msg) =>
	msg
		.map((i) => {
			if (typeof i === 'object' || Array.isArray(i)) return JSON.stringify(i);
			return i;
		})
		.join('');

module.exports.p = {
	log: (...msg) => process.stdout.write(`[INFO] ${isObjectOrArray(msg)}\n`),
	warn: (...msg) =>
		process.stdout.write(`\x1b[33m[WARN] ${isObjectOrArray(msg)}${RESET}\n`),
	err: (...msg) =>
		process.stderr.write(`\x1b[31m[ERR ] ${isObjectOrArray(msg)}${RESET}\n`),
	errclose: (...msg) => {
		process.stderr.write(`\x1b[31m[ERR ] ${isObjectOrArray(msg)}${RESET}\n`);
		process.exit(1);
	},
	res: (...msg) =>
		process.stdout.write(`${BLUE}[RESULT] ${isObjectOrArray(msg)}${RESET}\n`),
};
