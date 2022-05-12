import React from "react";
import moment from "moment";

// Styled Components
import { ArrowButton, DatePickerContainer } from './DatePicker.styled';
import { Large } from '../../../../styled-components/Text.styled';


function DatePicker(props) {
    const {moveToNextMonth, moveToPreviousMonth, dataToRender} = props;

    return (
        <DatePickerContainer>
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
        </DatePickerContainer>
    );
}

export default DatePicker;
