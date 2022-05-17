import React from "react";
import moment from "moment";

// Styled Components
import { Bold, Small } from "../../../../styled-components/Text.styled";
import { FlexContainer, ModalContainer } from "../../../../styled-components/Default.styled";
import {
	FormRadio,
	RadioLabel,
	FormLabel,
	FormInput,
	FormSelect,
	FormButton,
	TitleContainer,
	TransTypeContainer,
	TransInputContainer,
} from "./Forms.styled";

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
			<TitleContainer>
				<Bold>{mode === "add" ? "Add" : "Edit"} Transaction</Bold>
			</TitleContainer>

			<form onSubmit={handleSubmit}>
				{/* Select transaction type */}
				<TransTypeContainer>
					<FormRadio
						type="radio"
						name="transactionType"
						value="income"
						id="income"
						checked={values.transactionType === "income"}
						onChange={handleValueChange}
					/>

					<RadioLabel htmlFor="income">
						Income
					</RadioLabel>

					<FormRadio
						type="radio"
						name="transactionType"
						value="expense"
						id="expense"
						checked={values.transactionType === "expense"}
						onChange={handleValueChange}
					/>

					<RadioLabel htmlFor="expense">
						Expense
					</RadioLabel>

					<FormRadio
						type="radio"
						name="transactionType"
						value="transfer"
						id="transfer"
						checked={values.transactionType === "transfer"}
						onChange={handleValueChange}
					/>

					<RadioLabel htmlFor="transfer">
						Transfer
					</RadioLabel>
				</TransTypeContainer>

				<TransInputContainer>
					{/* Transaction information */}
					<FlexContainer justifySmall="space-between">
						<FormLabel htmlFor="transactionDate">
							Date
						</FormLabel>
						<FormInput
							type="date"
							name="transactionDate"
							id="transactionDate"
							onChange={handleValueChange}
							value={moment(values.transactionDate).format("YYYY-MM-DD")}
						/>
					</FlexContainer>

					{/* For Income and Expense transaction types */}
					{values.transactionType !== "transfer" && (
						<>
							<FlexContainer justifySmall="space-between">
								<FormLabel htmlFor="fromAccount">
									Account
								</FormLabel>
								<div>
									<FormSelect
										value={values.fromAccount}
										onChange={handleValueChange}
										name="fromAccount"
										id="fromAccount"
									>
										<option value="" disabled>
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
									<Small type = "error">{errorMsgs.fromAccount}</Small>
								</div>
							</FlexContainer>

							<FlexContainer justifySmall="space-between">
								<FormLabel htmlFor="transactionCategory">
									Category
								</FormLabel>

								<div>
									<FormSelect
										value={values.transactionCategory}
										onChange={handleValueChange}
										id="transactionCategory"
										name="transactionCategory"
									>
										<option value="" disabled>
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
									<Small type = "error">
										{errorMsgs.transactionCategory}
									</Small>
								</div>
							</FlexContainer>
						</>
					)}

					{/* For transfer transaction type */}
					{values.transactionType === "transfer" && (
						<>
							<FlexContainer justifySmall="space-between">
								<FormLabel htmlFor="fromAccount">
									From
								</FormLabel>
								<div>
									<FormSelect
										value={values.fromAccount}
										onChange={handleValueChange}
										name="fromAccount"
										id="fromAccount"
									>
										<option value="" disabled>
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
									<Small type = "error">{errorMsgs.fromAccount}</Small>
								</div>
							</FlexContainer>

							<FlexContainer justifySmall="space-between">
								<FormLabel htmlFor="toAccount">
									To
								</FormLabel>
								<div>
									<FormSelect
										value={values.toAccount}
										onChange={handleValueChange}
										name="toAccount"
										id="toAccount"
									>
										<option value="" disabled>
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
									<Small type = "error">{errorMsgs.toAccount}</Small>
								</div>
							</FlexContainer>
						</>
					)}

					<FlexContainer justifySmall="space-between">
						<FormLabel htmlFor="transactionAmount">
							Amount
						</FormLabel>
						<div>
							<FormInput
								type="number"
								name="transactionAmount"
								id="transactionAmount"
								onChange={handleValueChange}
								value={values.transactionAmount ? Math.abs(values.transactionAmount) : ""}
								min="0"
								placeholder="0"
								onKeyDown={blockInvalidCharacter}
								step = "0.01"
							/>
							<Small type = "error">{errorMsgs.transactionAmount}</Small>
						</div>
					</FlexContainer>

					<FlexContainer justifySmall="space-between">
						<FormLabel htmlFor="transactionNotes">
							Notes
						</FormLabel>
						<FormInput
							type="text"
							name="transactionNotes"
							id="transactionNotes"
							value={values.transactionNotes}
							onChange={handleValueChange}
						/>
					</FlexContainer>
				</TransInputContainer>

				<TransInputContainer>
					<FlexContainer>
						<FormButton type="submit" value="save">
							Save
						</FormButton>
						{mode === "edit" && (
							<FormButton
								type="button"
								onClick={handleDeleteTransaction}
								value="delete"
							>
								Delete
							</FormButton>
						)}
						<FormButton type="button" onClick={cancelSubmit}>
							Cancel
						</FormButton>
					</FlexContainer>
				</TransInputContainer>
			</form>
		</ModalContainer>
	);
}

export default Form;
