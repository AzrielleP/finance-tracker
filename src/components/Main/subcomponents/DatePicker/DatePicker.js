import React from "react";
import moment from "moment";

// Styled Components
import { ArrowButton } from './DatePicker.styled';
import { Large } from '../../../../styled-components/Text.styled';
import { FlexContainer } from '../../../../styled-components/Default.styled';

function DatePicker(props) {
    const {moveToNextMonth, moveToPreviousMonth, dataToRender} = props;

    return (
        <FlexContainer>
            <ArrowButton type='button' onClick={moveToPreviousMonth}>
                <i className='fa-solid fa-angle-left'></i>
            </ArrowButton>

            <Large>
                {typeof dataToRender.month !== "string" ? moment.monthsShort(dataToRender.month) : dataToRender.month}
                {"  "}
                {dataToRender.year}
            </Large>

            <ArrowButton type='button' onClick={moveToNextMonth}>
                <i className='fa-solid fa-angle-right'></i>
            </ArrowButton>
        </FlexContainer>
    );
}

export default DatePicker;
