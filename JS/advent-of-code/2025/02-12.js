const { p } = require('../../utils/logger');
const { data } = require('./02-12-shared');
const exRangesStr =
	'11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';

const rangesStr = data;
const rangesArr = rangesStr.split(',');
const rangesNum = rangesArr.length;

const isRepeatingNumber = (value = '') => {
	if (!value) return false;
	let isRepeating = false,
		item = value.toString().split('');

	if (item) p.log('isRepeating ,', item);
	let seq;
	for (let i = 0; i < Math.floor(item.length) / 2; i++) {
		let next = item[i + 1],
			curr = item[i],
			last = item[item.length - (i + 1)],
			prev = item.length - i;
		p.log(
			'isSeq',
			curr === next,
			item.length,
			last,
			Math.floor(item.length / 2)
		);
		if (curr === next) return true;
	}
};
const range = (
	idvRange = '' //default split must be a string
) => {
	if (!idvRange) throw 'idvRange is falsy value';
	if (typeof idvRange !== 'string') throw 'idvRange must be a string';
	const splitIdvRange = idvRange.split('-');
	let tmp = false,
		min = splitIdvRange[0],
		max = splitIdvRange[1];
	if (min > max) {
		tmp = true;
		max = splitIdvRange[1];
		min = splitIdvRange[0];
	}
	const maxCount = max - min;
	p.log('Range is reverse', tmp);
	// p.log('Amount of numbers between ranges', min, max, maxCount);
	for (min <= max; min++; ) {
		let repeats = isRepeatingNumber(min);

		p.log('First num: ', min);
		break;
	}
};

const main = () => {
	try {
		p.log('Ranges count: ', rangesNum);
		for (let i = 0; i < rangesArr.length; i++) {
			range(rangesArr[i]);
		}
		// const firstRange = rangesArr[0];
		// p.log(firstRange);
		// const splitRange = firstRange.split('-');
		// p.log(splitRange);
		// const diff = splitRange[1] - splitRange[0];
		// p.log(diff);
		// range(firstRange);
		// for (let i = splitRange[0]; i <= splitRange[1]; i++) {
		// 	p.log('First num: ', i);
		// 	break;
		// }
	} catch (err) {
		p.err(err); //Shouldn't arrive here ever.
	}
};

main();
