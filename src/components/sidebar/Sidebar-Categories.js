import React, { useState, useEffect } from "react";
import { groupByCategory } from "../../helpers/groupingData";

function SidebarCategories(props) {
    const { transaction } = props;
    const [incomeCategories, setIncomeCategories] = useState([]);
    const [expenseCategories, setExpenseCategories] = useState([]);

    useEffect(() => {
        setIncomeCategories(groupByCategory(transaction, "income"));
        setExpenseCategories(groupByCategory(transaction, "expense"));
    }, [transaction]);

    return (
        <div>
            <h2>Categories</h2>
            <div>
                <h3>Income</h3>
                {incomeCategories.length === 0 && <p>No available data</p>}
                {incomeCategories.length > 0 && incomeCategories.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>
                                {item.categoryName}: {item.value}
                            </p>
                        </div>
                    );
                })}

                <h3>Expense</h3>
                {expenseCategories.length === 0 && <p>No available data</p>}
                {expenseCategories.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>
                                {item.categoryName}: {item.value}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SidebarCategories;
