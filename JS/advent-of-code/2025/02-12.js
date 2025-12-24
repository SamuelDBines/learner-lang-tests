const exRangesStr =
	'11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';

const rangesStr =
	'19391-47353,9354357-9434558,4646427538-4646497433,273-830,612658-674925,6639011-6699773,4426384-4463095,527495356-527575097,22323258-22422396,412175-431622,492524-611114,77-122,992964846-993029776,165081-338962,925961-994113,7967153617-7967231799,71518058-71542434,64164836-64292066,4495586-4655083,2-17,432139-454960,4645-14066,6073872-6232058,9999984021-10000017929,704216-909374,48425929-48543963,52767-94156,26-76,1252-3919,123-228';
const rangesArr = rangesStr.split(',');
const rangesNum = rangesArr.length;

const isRepeatingNumber = (value = '') => {
	if (!value) return false;
	let isRepeating = false,
		item = value.toString().split('');

	if (item) console.log('isRepeating ,', item);
	let seq;
	for (let i = 0; i < Math.floor(item.length) / 2; i++) {
		let next = item[i + 1],
			curr = item[i],
			last = item[item.length - (i + 1)],
			prev = item.length - i;
		console.log(
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
	console.log('Range is reverse', tmp);
	// console.log('Amount of numbers between ranges', min, max, maxCount);
	for (min <= max; min++; ) {
		let repeats = isRepeatingNumber(min);

		console.log('First num: ', min);
		break;
	}
};

const main = () => {
	try {
		console.log('Ranges count: ', rangesNum);
		for (let i = 0; i < rangesArr.length; i++) {
			range(rangesArr[i]);
		}
		// const firstRange = rangesArr[0];
		// console.log(firstRange);
		// const splitRange = firstRange.split('-');
		// console.log(splitRange);
		// const diff = splitRange[1] - splitRange[0];
		// console.log(diff);
		// range(firstRange);
		// for (let i = splitRange[0]; i <= splitRange[1]; i++) {
		// 	console.log('First num: ', i);
		// 	break;
		// }
	} catch (err) {
		console.error(err); //Shouldn't arrive here ever.
	}
};

main();
