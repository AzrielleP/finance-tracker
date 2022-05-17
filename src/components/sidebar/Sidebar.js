import React from "react";

// Styled Components
import { SidebarContainer, SidebarSelectors, SidebarRadio, SidebarLabel } from "./Sidebar.styled";

function Sidebar(props) {
    const { option, handleOptionChange } = props;

    return (
        <SidebarContainer>
            <SidebarSelectors justifySmall='space-around' option={option}>
                <SidebarRadio
                    type='radio'
                    name='sidebarOption'
                    value='transactions'
                    checked={option === "transactions"}
                    onChange={handleOptionChange}
                    id='transactions'
                />

                <SidebarLabel htmlFor='transactions'>
                    <i className='fa-solid fa-book'></i>
                    Transactions
                </SidebarLabel>

                <SidebarRadio
                    type='radio'
                    name='sidebarOption'
                    value='stats'
                    checked={option === "stats"}
                    onChange={handleOptionChange}
                    id='stats'
                />
                <SidebarLabel htmlFor='stats'>
                    <i className='fa-solid fa-chart-column'></i>
                    Stats
                </SidebarLabel>

                <SidebarRadio
                    type='radio'
                    name='sidebarOption'
                    value='accounts'
                    checked={option === "accounts"}
                    onChange={handleOptionChange}
                    id='accounts'
                />
                <SidebarLabel htmlFor='accounts'>
                    <i className='fa-solid fa-coins'></i>
                    Accounts
                </SidebarLabel>

                <SidebarRadio
                    type='radio'
                    name='sidebarOption'
                    value='settings'
                    checked={option === "settings"}
                    onChange={handleOptionChange}
                    id='settings'
                />
                <SidebarLabel htmlFor='settings'>
                    <i className='fa-solid fa-gear'></i>
                    Settings
                </SidebarLabel>
            </SidebarSelectors>
        </SidebarContainer>
    );
}

export default Sidebar;
