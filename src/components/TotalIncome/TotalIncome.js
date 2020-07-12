import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './TotalIncome.css';


const totalIncome = props => {
	
	let months = ['January',
	'February',
	'March',
	'April',
	'May','June','July','August','September','October','November','December'];
	let currentMonth = new Date().getMonth();

	let remainingAmt = props.remaining;
	if(remainingAmt < 0) {
		remainingAmt = remainingAmt * (-1)
	}
	return (
		
			<Aux>
				<div className={classes.Total}>
					<h2>Available budget in {months[currentMonth]},{new Date().getFullYear()}</h2>
					<h1 style={{margin:"1rem 0"}}>{props.remaining < 0 ? "-" : "+"} {remainingAmt}.00</h1>
				</div>
			</Aux>
		)
}

export default totalIncome;