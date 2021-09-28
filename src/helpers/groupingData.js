import moment from "moment";
import { computeTransAmounts, filter, calcTotalOfFiltered  } from "./calc";
import { sortByDate, sortByCategory } from "./sort";

const processData = (transaction) => {
    /*
	Return an object that looks like
	[
        {
            month: ___
			monthIncomeTotal: ___
			monthExpenseTotal: ___
            dailyTrans: [
                {
                    day: ___
                    transactions: []
					dayIncomeTotal: ___
					dayExpenseTotal: ___
                }
            ]
        }
       ]
	
	*/
    let sortedData = transaction;
    sortedData = sortByDate(sortedData);
    const groupedData = groupByDate(sortedData);
    const finalizedData = computeTransAmounts(groupedData);
    return finalizedData;
};

const groupByDate = (data) => {
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

        const indexDay = modifiedData[indexMonth].dailyTrans.findIndex((item) => item.day === selectedDate);
        modifiedData[indexMonth].dailyTrans[indexDay].transactions.push(item);
    });

    return modifiedData;
};

const groupByCategory = (data, type) => {
	/*
		Desired output
		[
			{
				categoryName: ___
				totalAmount: ___
			},
			...
		]
	*/

	let groupedData = [];

	// Filter and sort according to type
	const filteredData = sortByCategory(filter(data, { transactionType: type }));

	// Get all categories and make it into an array. Remove duplicates too
	let categoriesArray = [...new Set(filteredData.map((item) => item.transactionCategory))];

	for (let element of categoriesArray) {
		let category = {
			categoryName: element,
			value: 0,
		};

		// Calculate total amount of a category
		category.value = calcTotalOfFiltered(filteredData, "transactionCategory", element, "transactionAmount");

		groupedData.push(category);
	}

	return groupedData;
};

// For updating transaction when amount or category is changed
const updateTransaction = (transaction, currentValue, previousValue) => {
    let updatedTransaction = transaction;
    updatedTransaction
        .filter(({ fromAccount, toAccount }) => fromAccount === previousValue || toAccount === previousValue)
        .map((item) => {
            if (item.fromAccount === previousValue) {
                item.fromAccount = currentValue;
            }
            if (item.toAccount === previousValue) {
                item.toAccount = currentValue;
            }

            return item;
        });
    return updatedTransaction;
};

export { processData, updateTransaction, groupByCategory };
