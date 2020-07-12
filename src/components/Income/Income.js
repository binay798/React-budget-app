import React from 'react';
import classes from './Income.css';


const income = props => {

	return (
		<div className={classes.Income}>
			<p style={{color:"#333"}}>INCOME</p>
			<p style={{color:"#f7f7f7"}}>+ {props.income.toFixed(2)}</p>
		</div>
		)
}

export default income;