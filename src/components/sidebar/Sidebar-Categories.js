import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { createData, customization } from "./charts/chartSettings";
import { groupByCategory } from "../../helpers/groupingData";

// Styled Components
import { ScrollingContainer, ChartContainer } from "../styled-components/Containers.styled";
import { Small, Subtitle } from "../styled-components/Text.styled";

function SidebarCategories(props) {
    const { transaction, dateToRender } = props;
    const [incomeCategories, setIncomeCategories] = useState([]);
    const [expenseCategories, setExpenseCategories] = useState([]);

    useEffect(() => {
        setIncomeCategories(groupByCategory(transaction, "income", dateToRender));
        setExpenseCategories(groupByCategory(transaction, "expense", dateToRender));
    }, [transaction, dateToRender]);

    return (
        <ScrollingContainer>
            <ChartContainer>
                <Subtitle>Income</Subtitle>
                {incomeCategories.length === 0 ? (
                    <Small>No available data</Small>
                ) : (
                    <div>
                        <Pie data={createData(incomeCategories, "income")} options={customization(incomeCategories)} />
                    </div>
                )}
            </ChartContainer>

            <ChartContainer>
                <Subtitle>Expense</Subtitle>
                {expenseCategories.length === 0 ? (
                    <Small>No available data</Small>
                ) : (
                    <div>
                        <Pie
                            data={createData(expenseCategories, "expense")}
                            options={customization(expenseCategories)}
                        />
                    </div>
                )}
            </ChartContainer>
        </ScrollingContainer>
    );
}

export default SidebarCategories;
