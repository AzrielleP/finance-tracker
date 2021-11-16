import React from "react";
import moment from "moment";

import { Small, Bold} from './styled-components/Text.styled';
import { FlexContainer, ModalContainer, TransTypeContainer, TransInputContainer } from './styled-components/Containers.styled';
import { FormRadio, FormLabel, FormInput, FormSelect } from './styled-components/Forms.styled';
import { FormButton } from './styled-components/Buttons.styled';
import { generalColors, lightTheme } from "./styled-components/Themes-Style.styled";

function Form(props) {
    const {
        accounts,
        categories,
        errorMsgs,
        values,
        mode,
        handleSubmit,
        cancelSubmit,
        handleValueChange,
        handleDeleteTransaction,
        blockInvalidCharacter,
    } = props;

    return (
        <ModalContainer>
            <Small>{mode === "add" ? "Add" : "Edit"} Transaction</Small>

            <form onSubmit={handleSubmit}>
                {/* Select transaction type */}
                <TransTypeContainer>
                    <FormRadio
                        type='radio'
                        name='transactionType'
                        value='income'
                        id = "income"
                        checked={values.transactionType === "income"}
                        onChange={handleValueChange}
                    />

                    <FormLabel htmlFor = 'income'>    
                        <Bold textAlign = 'center'>
                            Income
                        </Bold>
                    </FormLabel>

                    <FormRadio
                        type='radio'
                        name='transactionType'
                        value='expense'
                        id='expense'
                        checked={values.transactionType === "expense"}
                        onChange={handleValueChange}
                    />

                    <FormLabel htmlFor = 'expense'>
                        <Bold textAlign = 'center'>
                            Expense
                        </Bold>
                    </FormLabel>

                    <FormRadio
                        type='radio'
                        name='transactionType'
                        value='transfer'
                        id='transfer'
                        checked={values.transactionType === "transfer"}
                        onChange={handleValueChange}
                    />

                    <FormLabel htmlFor = 'transfer'>
                        <Bold textAlign = 'center'>
                            Transfer
                        </Bold>
                    </FormLabel>

                </TransTypeContainer>
   
                <TransInputContainer>
                    {/* Transaction information */}
                    <FlexContainer justifySmall = 'space-between'>
                    <p htmlFor = 'transactionDate' as = 'label'>
                        Date
                    </p>
                    <FormInput
                            type='date'
                            name='transactionDate'
                            id = 'transactionDate'
                            onChange={handleValueChange}
                            value={moment(values.transactionDate).format("YYYY-MM-DD")}
                        />
                    </FlexContainer>

                    {/* For Income and Expense transaction types */}
                    {values.transactionType !== "transfer" && (
                        <div>
                            <FlexContainer justifySmall = 'space-between'>
                                <p htmlFor = 'fromAccount' as = 'label'>
                                    Account
                                </p>
                                <FormSelect 
                                    value={values.fromAccount} 
                                    onChange={handleValueChange} 
                                    name='fromAccount'
                                    id = 'fromAccount'
                                >
                                    <option value='' disabled>
                                        -- Select one --
                                    </option>
                                    {accounts.map((item, key) => {
                                        return (
                                            <option value={item} key={key}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </FormSelect>
                                {/* <span style={{ color: "red" }}>{errorMsgs.fromAccount}</span> */}
                            </FlexContainer>

                            <FlexContainer justifySmall = 'space-between'>
                                <p htmlFor = 'transactionCategory' as = 'label'>
                                Category
                                </p>
                                <FormSelect
                                    value={values.transactionCategory}
                                    onChange={handleValueChange}
                                    id = 'transactionCategory'
                                    name='transactionCategory'
                                >
                                    <option value='' disabled>
                                        -- Select one --
                                    </option>
                                    {categories[values.transactionType].map((item, key) => {
                                        return (
                                            <option value={item} key={key}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </FormSelect>
                                {/* <span style={{ color: "red" }}>{errorMsgs.transactionCategory}</span> */}
                            </FlexContainer>
                        </div>
                    )}

                    {/* For transfer transaction type */}
                    {values.transactionType === "transfer" && (
                        <div>
                            <FlexContainer justifySmall = 'space-between'>
                                <p htmlFor = 'fromAccount' as = 'label'>
                                    From
                                </p>
                                <FormSelect value={values.fromAccount} onChange={handleValueChange} name='fromAccount' id = 'fromAccount'>
                                    <option value='' disabled>
                                        -- Select One --
                                    </option>
                                    {accounts.map((item, key) => {
                                        return (
                                            <option value={item} key={key}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </FormSelect>
                                {/* <span style={{ color: "red" }}>{errorMsgs.fromAccount}</span> */}
                            </FlexContainer>

                            <FlexContainer justifySmall = 'space-between'>
                                <p htmlFor = 'toAccount' as = 'label'>
                                    To
                                </p>
                                <FormSelect value={values.toAccount} onChange={handleValueChange} name='toAccount' id='toAccount'>
                                    <option value='' disabled>
                                        -- Select One --
                                    </option>
                                    {accounts.map((item, key) => {
                                        return (
                                            <option value={item} key={key}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </FormSelect>
                                {/* <span style={{ color: "red" }}>{errorMsgs.toAccount}</span> */}
                            </FlexContainer>
                        </div>
                    )}

                    <FlexContainer justifySmall = 'space-between'>
                        <p htmlFor = 'transactionAmount' as = 'label'>
                            Amount
                        </p>
                        <FormInput
                            type='number'
                            name='transactionAmount'
                            id = 'transactionAmount'
                            onChange={handleValueChange}
                            value={values.transactionAmount}
                            min='0'
                            placeholder='0'
                            onKeyDown={blockInvalidCharacter}
                        />
                            {/* <span style={{ color: "red" }}>{errorMsgs.transactionAmount}</span> */}
                    </FlexContainer>

                    <FlexContainer justifySmall = 'space-between'>
                        <p htmlFor = 'transactionNotes' as = 'label'>
                            Notes
                        </p>
                        <FormInput
                            type='text'
                            name='transactionNotes'
                            id='transactionNotes'
                            value={values.transactionNotes}
                            onChange={handleValueChange}
                        />
                    </FlexContainer>
                </TransInputContainer>

                <TransInputContainer>
                    <FlexContainer>
                        <FormButton type='submit' color = {lightTheme.blue}>Save</FormButton>
                        {
                            mode === 'edit' && 
                            <FormButton type = 'button' onClick = {handleDeleteTransaction} color = {generalColors.red}> 
                                Delete
                            </FormButton>
                        }
                        <FormButton type='button' onClick={cancelSubmit} color = {generalColors.darkAccent}>
                            Cancel
                        </FormButton>
                    </FlexContainer>
                    
                </TransInputContainer>
            </form>
        </ModalContainer>
    );
}

export default Form;
