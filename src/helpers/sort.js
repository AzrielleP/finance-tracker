// * CONTAINS ALL SORT FUNCTIONS

// Sort data with the most recent one on top
const sortByDate = (data) => {
	return data.sort(
		(item1, item2) => item2.transactionDate.getTime() - item1.transactionDate.getTime()
	);
};

// Sort categories alphabetically
const sortByCategory = (dataToSort) => {
	return dataToSort.sort((item1, item2) => {
		let category1 = item1.transactionCategory.toUpperCase();
		let category2 = item2.transactionCategory.toUpperCase();
		return category1 < category2 ? -1 : category1 > category2 ? 1 : 0;
	});
};

// Sort by value
const sortByValue = (dataToSort) => {
	return dataToSort.sort((item1, item2) => {
		let category1 = item1.value;
		let category2 = item2.value;
		return category1 > category2 ? -1 : category1 > category2 ? 1 : 0;
	});
};

export { sortByDate, sortByCategory, sortByValue };
