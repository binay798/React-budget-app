import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './IncomeDesc.css';

const incomeDesc = props => {

	let incomes = props.incomeDesc
	.map(income => {
		return (
			<div key={income.name} className={classes.Incomes}>
				<p style={{color:"#333"}}>{income.name}</p>
				<p className={classes.Value}>+ {income.value}.00</p>
			</div>
			)
	});


	return (
			<Aux>
				<div className={classes.IncomeDesc}>
					<h1 className={classes.Heading}>INCOME</h1>
					<div>
						{incomes}
					</div>
				</div>
			</Aux>
		)
}

export default incomeDesc;