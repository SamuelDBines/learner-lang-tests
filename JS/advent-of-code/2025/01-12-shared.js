const fs = require('fs');
const path = require('path');

module.exports.data = fs.readFileSync(
	path.join(__dirname, '../../../', 'advent-of-code/01-12-2025.txt'),
	'utf8'
);
