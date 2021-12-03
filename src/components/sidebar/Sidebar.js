import React, { useState, useEffect } from "react";
import SidebarCategories from "./Sidebar-Categories";
import SidebarAccounts from "./Sidebar-Accounts";
import ThemeToggler from "./../ThemeToggler";
import { calcTotalOfFiltered, calcFromAccount } from "../../helpers/calc";
import { computeAssets, computeLiabilities } from "../../helpers/calc";

// Styled Components
import { SidebarContainer, SidebarFixedContainer, FlexContainer, SidebarSelectors } from "../styled-components/Containers.styled";
import { SidebarRadio } from "../styled-components/Forms.styled";
import { Bold } from "../styled-components/Text.styled";
import { ShowSidebarButton } from "../styled-components/Buttons.styled";
import { ReactComponent as CloseButton } from "./../styled-components/svg/CloseButton.svg";

function Sidebar(props) {
    const { transaction, accounts, dateToRender, handleSidebar, showSidebar, handleDarkMode } = props;
    const [option, setOption] = useState("categories");
    const handleOptionChange = (event) => {
        let value = event.target.value;
        setOption(value);
    };

    const initialState = {
        totalAssets: 0,
        totalLiabilities: 0,
        items: [],
    };
    const [accountsInfo, setAccountsInfo] = useState(initialState);

    // Create an initial render
    const getAccounts = () => {
        let initial = initialState;
        for (let element of accounts) {
            let account = {
                accountName: element,
                value: 0,
            };
            initial.items.push(account);
        }
        return initial;
    };

    useEffect(() => {
        const handleData = () => {
            let data = initialState;

            for (let element of accounts) {
                let account = {
                    accountName: element,
                    value: 0,
                };

                // Compute total amount of account
                account.value =
                    calcTotalOfFiltered(transaction, "toAccount", element, "transactionAmount") +
                    calcFromAccount(transaction, "fromAccount", element, "transactionAmount");

                data.items.push(account);
            }

            if (data.items.length !== 0) {
                data.totalAssets = computeAssets(data.items);
                data.totalLiabilities = computeLiabilities(data.items);
            }

            setAccountsInfo(data);
        };
        handleData();
    }, [transaction, accounts]);

    return (
        <SidebarContainer $display={showSidebar}>
            <SidebarFixedContainer>
                <FlexContainer justifySmall='space-between' justifyLarge='flex-end'>
                    <ShowSidebarButton onClick={handleSidebar} alignment='right'>
                        <CloseButton />
                    </ShowSidebarButton>
                    <ThemeToggler handleDarkMode = {handleDarkMode}/>
                </FlexContainer>

                <SidebarSelectors justifySmall='space-around' option={option}>
                    <SidebarRadio
                        type='radio'
                        name='sidebarOption'
                        value='categories'
                        checked={option === "categories"}
                        onChange={handleOptionChange}
                        id='categories'
                    />
                    <Bold as='label' htmlFor='categories'>
                        CATEGORIES
                    </Bold>

                    <SidebarRadio
                        type='radio'
                        name='sidebarOption'
                        value='accounts'
                        checked={option === "accounts"}
                        onChange={handleOptionChange}
                        id='accounts'
                    />
                    <Bold as='label' htmlFor='accounts'>
                        ACCOUNTS
                    </Bold>
                </SidebarSelectors>
            </SidebarFixedContainer>

            {option === "categories" && <SidebarCategories transaction={transaction} dateToRender={dateToRender} />}
            {option === "accounts" && (
                <SidebarAccounts accountsInfo={accountsInfo} getAccounts={getAccounts} initialState={initialState} />
            )}
        </SidebarContainer>
    );
}

export default Sidebar;
