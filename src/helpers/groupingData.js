import moment from "moment";
import { computeTransAmounts, filter, calcTotalOfFiltered } from "./calc";
import { sortByDate, sortByCategory, sortByValue } from "./sort";

const processData = (transaction) => {
    /*
	Return an object that looks like
	[
        {
            month: ___
			monthIncomeTotal: ___
			monthExpenseTotal: ___
			monthTotal: ___
            dailyTrans: [
                {
                    day: ___
                    transactions: []
					dayIncomeTotal: ___
					dayExpenseTotal: ___
					dayTotal: ___
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
    const getMonth = (date) => moment(date).format("MMM");
    const getYear = (date) => moment(date).format("YYYY");

    let modifiedData = [];
    data.forEach((item) => {
        const selectedDate = formatTime(item.transactionDate);
        const selectedDateMonth = getMonth(item.transactionDate);
        const selectedDateYear = getYear(item.transactionDate);

        // Create a new month and year if it doesn't exists yet
        if (
            !modifiedData.some((item) => item.month === selectedDateMonth) ||
            !modifiedData.some((item) => item.year === selectedDateYear)
        ) {
            modifiedData.push({
                month: selectedDateMonth,
                year: selectedDateYear,
                dailyTrans: [],
                monthIncomeTotal: 0,
                monthExpenseTotal: 0,
            });
        }

        const indexMonth = modifiedData.findIndex(
            (item) => item.month === selectedDateMonth && item.year === selectedDateYear
        );

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

const groupByCategory = (data, type, date) => {
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

    const filteredByDate = data.filter((item) => {
        const month = moment(item.transactionDate).month();
        const year = moment(item.transactionDate).year();
        return date.month === month && date.year === year;
    });

    if (filteredByDate.length !== 0) {
        // Filter and sort according to type
        const filteredData = sortByCategory(filter(filteredByDate, { transactionType: type }));

        // Get all categories and make it into an array. Remove duplicates too
        let categoriesArray = [...new Set(filteredData.map((item) => item.transactionCategory))];

        for (let element of categoriesArray) {
            let category = {
                categoryName: element,
                value: 0,
            };

            // Calculate total amount of a category
            // Use Math.abs for correct calculation in pie chart
            category.value = Math.abs(
                calcTotalOfFiltered(filteredData, "transactionCategory", element, "transactionAmount")
            );

            groupedData.push(category);
        }
    }
    groupedData = sortByValue(groupedData);
    return groupedData;
};

export { processData, groupByCategory };
