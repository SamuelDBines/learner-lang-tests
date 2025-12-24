const isObjectOrArray = (msg) =>
	msg.map((i) => {
		if (typeof i === 'object' || Array.isArray(i)) return JSON.stringify(i);
		return i;
	});

module.exports.p = {
	log: (...msg) =>
		process.stdout.write('[INFO] ' + isObjectOrArray(msg) + '\n'),
	warn: (...msg) =>
		process.stdout.write('\x1b[33m[WARN] ' + isObjectOrArray(msg) + '\n'),
	err: (...msg) =>
		process.stderr.write('\x1b[31m[ERR ] ' + isObjectOrArray(msg) + '\n'),
};
