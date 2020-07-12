import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './ExpenseDesc.css';


const expenseDesc = props => {
	console.log(props.expense)
	let expenses = props.expenseDesc
	.map(expense => {
		let calcPercent;
		let expenses = expense.value;
		let income = props.income;
		if(income >0 && expenses > 0) {
			calcPercent = (Math.floor((expenses/income) * 100)) + "%";
		}else {
			calcPercent = "---"
		}
		return (
			
				<div key={expense.name} className={classes.Expense}>
					<p style={{color:"#333"}}>{expense.name}</p>
					<div className={classes.Value}>
						<p style={{color:"#ef7b4e"}}>- {expense.value}.00</p>
						<p className={classes.Percent}>{calcPercent}</p>
					</div>
				</div>
			
			)
	});


	return (
			<Aux>
				<div className={classes.ExpenseDesc}>
					<h1 className={classes.Heading}>EXPENSE</h1>
					<div>
						{expenses}
					</div>
				</div>
			</Aux>
		)
}

export default expenseDesc;