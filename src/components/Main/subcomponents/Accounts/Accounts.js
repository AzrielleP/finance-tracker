import React from "react";
import { singleValueFormat } from "../../../../helpers/calc";
import Totals from "../Totals/Totals";

// Styled Components
import { ScrollingContainer, FlexHeader, FixedContainer } from "../../../../styled-components/Default.styled";
import { AccountContainer } from "./Accounts.styled";
import { Main, Large } from "../../../../styled-components/Text.styled";

function SidebarAccounts(props) {
    const { accountsInfo, getAccounts, initialState } = props;

    return (
        <div>
            <FixedContainer>
                <FlexHeader>
                    <Large>Accounts</Large>
                </FlexHeader>
                <Totals
                    dataAsset={accountsInfo.totalAssets}
                    dataExpense={accountsInfo.totalLiabilities}
                    dataTotal={accountsInfo.totalAssets + accountsInfo.totalLiabilities}
                    heading={["Assets", "Liabilities", "Total"]}
                />
            </FixedContainer>

            <ScrollingContainer>
                {(accountsInfo !== initialState ? accountsInfo : getAccounts()).items.map((item, key) => {
                    return (
                        <AccountContainer key={key} value = {item.value}>
                            <Main>{item.accountName}</Main>
                            <p>{singleValueFormat(item.value, false)}</p>
                        </AccountContainer>
                    );
                })}
            </ScrollingContainer>
        </div>
    );
}

export default SidebarAccounts;
