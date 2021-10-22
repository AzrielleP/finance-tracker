import React from "react";
import moment from "moment";

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
        <div>
            <h2>{mode === "add" ? "Add" : "Edit"} Transaction</h2>
            <form onSubmit={handleSubmit}>
                {/* Select transaction type */}
                <label>
                    <input
                        type='radio'
                        name='transactionType'
                        value='income'
                        checked={values.transactionType === "income"}
                        onChange={handleValueChange}
                    />
                    Income
                </label>

                <label>
                    <input
                        type='radio'
                        name='transactionType'
                        value='expense'
                        checked={values.transactionType === "expense"}
                        onChange={handleValueChange}
                    />
                    Expense
                </label>

                <label>
                    <input
                        type='radio'
                        name='transactionType'
                        value='transfer'
                        checked={values.transactionType === "transfer"}
                        onChange={handleValueChange}
                    />
                    Transfer
                </label>
                <br />

                {/* Transaction information */}
                <label>
                    Transaction Date:
                    <input
                        type='date'
                        name='transactionDate'
                        onChange={handleValueChange}
                        value={moment(values.transactionDate).format("YYYY-MM-DD")}
                    />
                </label>
                <br />

                {/* For Income and Expense transaction types */}
                {values.transactionType !== "transfer" && (
                    <div>
                        <label>
                            Account:
                            <select value={values.fromAccount} onChange={handleValueChange} name='fromAccount'>
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
                            </select>
                            <span style={{ color: "red" }}>{errorMsgs.fromAccount}</span>
                        </label>
                        <br />

                        <label>
                            Category:
                            <select
                                value={values.transactionCategory}
                                onChange={handleValueChange}
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
                            </select>
                            <span style={{ color: "red" }}>{errorMsgs.transactionCategory}</span>
                        </label>
                        <br />
                    </div>
                )}

                {/* For transfer transaction type */}
                {values.transactionType === "transfer" && (
                    <div>
                        <label>
                            From:
                            <select value={values.fromAccount} onChange={handleValueChange} name='fromAccount'>
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
                            </select>
                            <span style={{ color: "red" }}>{errorMsgs.fromAccount}</span>
                        </label>
                        <br />

                        <label>
                            To:
                            <select value={values.toAccount} onChange={handleValueChange} name='toAccount'>
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
                            </select>
                            <span style={{ color: "red" }}>{errorMsgs.toAccount}</span>
                        </label>
                        <br />
                    </div>
                )}

                <label>
                    Amount:
                    <input
                        type='number'
                        name='transactionAmount'
                        onChange={handleValueChange}
                        value={values.transactionAmount}
                        min='0'
                        placeholder='0'
                        onKeyDown={blockInvalidCharacter}
                    />
                    <span style={{ color: "red" }}>{errorMsgs.transactionAmount}</span>
                </label>
                <br />
                <label>
                    Notes:
                    <input
                        type='text'
                        name='transactionNotes'
                        value={values.transactionNotes}
                        onChange={handleValueChange}
                    />
                </label>
                <button type='submit'>Submit</button>
                <button type='button' onClick={cancelSubmit}>
                    Cancel
                </button>
                {mode === 'edit' && 
                    <button type = 'button' onClick = {handleDeleteTransaction}> 
                        Delete
                    </button>
                }
            </form>
        </div>
    );
}

export default Form;
