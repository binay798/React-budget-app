import React from 'react';
import classes from './Expense.css';


const expense = props => {
	let calcPercent;
	let expense = props.expense;
	let income = props.income;
	if(income >0 && expense > 0) {
		calcPercent = (Math.floor((expense/income) * 100)) + "%";
	}else {
		calcPercent = "---"
	}
	return (
		<div className={classes.Expense}>
			<p style={{color:"#333"}}>EXPENSE</p>
			<div style={{display:"flex",alignItems:"center"}}>
				<p style={{color:"#f7f7f7"}}>- {props.expense.toFixed(2)}</p>
				<p className={classes.Percent}>{calcPercent}</p>
			</div>
		</div>
		)
}

export default expense;