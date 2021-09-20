import moment from "moment";

const processData = (transaction) => {
	let sortedData = transaction;
	sortedData = sortData(sortedData);
	const groupedData = groupData(sortedData);
	const finalizedData = computeTransAmounts(groupedData);
	return finalizedData;
};

// Sort data with the most recent one on top
const sortData = (data) => {
	return data.sort(
		(item1, item2) => item2.transactionDate.getTime() - item1.transactionDate.getTime()
	);
};

const groupData = (data) => {
	/* Process the sorted data such that transactions will be grouped according to month, and then to each day
       Desired output:
       [
        {
            month: ___
            dailyTrans: [
                {
                    day: ___
                    transactions: []
                }
            ]
        }
       ]
    */
	const formatTime = (date) => moment(date).format("LL");
	const getMonth = (date) => moment(date).format("MMMM");

	let modifiedData = [];
	data.forEach((item) => {
		const selectedDate = formatTime(item.transactionDate);
		const selectedDateMonth = getMonth(item.transactionDate);

		// Create a new month if it doesn't exists yet
		if (!modifiedData.some((item) => item.month === selectedDateMonth)) {
			modifiedData.push({
				month: selectedDateMonth,
				dailyTrans: [],
				monthIncomeTotal: 0,
				monthExpenseTotal: 0,
			});
		}

		const indexMonth = modifiedData.findIndex((item) => item.month === selectedDateMonth);

		// Create a new day for a month if it doesn't exists yet
		if (!modifiedData[indexMonth].dailyTrans.some((item) => item.day === selectedDate)) {
			modifiedData[indexMonth].dailyTrans.push({
				day: selectedDate,
				transactions: [],
				dayIncomeTotal: 0,
				dayExpenseTotal: 0,
			});
		}

		const indexDay = modifiedData[indexMonth].dailyTrans.findIndex(
			(item) => item.day === selectedDate
		);
		modifiedData[indexMonth].dailyTrans[indexDay].transactions.push(item);
	});

	return modifiedData;
};

// Calculate the total transaction amount of income and expense per day and per month
const computeTransAmounts = (data) => {
	let modifiedData = data;
	const computeDailyTotal = (items, type, amount) => {
		return items
			.filter(({ transactionType }) => transactionType === type)
			.reduce((a, b) => a + Number(b[amount]), 0);
	};

	const computeMonthlyTotal = (items, amount) => {
		return items.reduce((a, b) => a + b[amount], 0);
	};

	for (let month of modifiedData) {
		for (let days of month.dailyTrans) {
			days.dayIncomeTotal = computeDailyTotal(
				days.transactions,
				"income",
				"transactionAmount"
			);
			days.dayExpenseTotal = computeDailyTotal(
				days.transactions,
				"expense",
				"transactionAmount"
			);

			// Expense is already negative
			days.dayTotal = days.dayIncomeTotal + days.dayExpenseTotal;
		}
		month.monthIncomeTotal = computeMonthlyTotal(month.dailyTrans, "dayIncomeTotal");
		month.monthExpenseTotal = computeMonthlyTotal(month.dailyTrans, "dayExpenseTotal");

		// Expense is already negative
		month.monthTotal = month.monthIncomeTotal + month.monthExpenseTotal;
	}

	return modifiedData;
};

export default processData;