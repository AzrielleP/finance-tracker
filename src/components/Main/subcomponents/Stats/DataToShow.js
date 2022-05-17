import React from "react";
import numeral from "numeral";
import { Pie } from "react-chartjs-2";
import { createData, customization } from "./chartSettings";

// Styled Components
import { FlexContainerBordered } from "../../../../styled-components/Default.styled";
import { DataContainer, PercentContainer, PieContainer, DataContainerHeading } from "./Stats.styled";
import { Main, Small, Bold } from "../../../../styled-components/Text.styled";

function DataToShow(props) {
    const {data, type} = props;
    return(
        <DataContainer>
            <DataContainerHeading>
                {type === "income" ? (
                    <Bold>Income</Bold>
                ):
                    (<Bold>Expense</Bold>)}
            </DataContainerHeading>
            {data.length === 0 ? (
                <Main>No available data</Main>
            ) : (
                <PieContainer>
                    <Pie
                        data={createData(data, type)}
                        options={customization(data)}
                    />
                </PieContainer>
            )}
            {data.map((item, key) => {
                return (
                    <FlexContainerBordered key={key} justifySmall='space-between'>
                        <div>
                            <PercentContainer index={key} type={type}>
                                <Small>{item.percent}</Small>
                            </PercentContainer>
                            <Main>{item.categoryName}</Main>
                        </div>
                        <Main>{numeral(item.value).format("0,0.00")}</Main>
                    </FlexContainerBordered>
                );
            })}
        </DataContainer>
    )
};

export default DataToShow;