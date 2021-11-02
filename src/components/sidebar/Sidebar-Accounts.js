import React from "react";
import { formattedValue } from "../../helpers/calc";
import { ScrollingContainer, LargeNumberContainer, FlexContainer, Dot } from "../styled-components/Containers.styled";
import { Subtitle, Small, Bold } from "../styled-components/Text.styled";

function SidebarAccounts(props) {
    const { accountsInfo, getAccounts, initialState } = props;

    return (
        <ScrollingContainer>
            <FlexContainer justify='space-between'>
                <LargeNumberContainer>
                    <Small>ASSETS</Small>
                    <Subtitle>{formattedValue(accountsInfo.totalAssets)}</Subtitle>
                </LargeNumberContainer>
                <LargeNumberContainer>
                    <Small>LIABILITIES</Small>
                    <Subtitle>{formattedValue(accountsInfo.totalLiabilities)}</Subtitle>
                </LargeNumberContainer>
            </FlexContainer>
            {(accountsInfo !== initialState ? accountsInfo : getAccounts()).items.map((item, key) => {
                return (
                    <FlexContainer justify='space-between' key={key}>
                        <FlexContainer>
                            <Dot color={item.accountName} />
                            <Bold>{item.accountName}</Bold>
                        </FlexContainer>
                        <p>{item.value}</p>
                    </FlexContainer>
                );
            })}
        </ScrollingContainer>
    );
}

export default SidebarAccounts;
