import React from 'react';
import TotalIncome from '../../components/TotalIncome/TotalIncome';
import Aux from '../../hoc/Aux';
import classes from './Budget.css'
import back from '../../assets/back.png';
import Income from '../../components/Income/Income';
import Expense from '../../components/Expense/Expense'
import BudgetForm from '../../components/BudgetForm/BudgetForm'
import IncomeDesc from '../../components/Income/IncomeDesc/IncomeDesc';
import ExpenseDesc from '../../components/Expense/ExpenseDesc/ExpenseDesc';

class Budget extends React.Component {

	state = {
	    income:{
	    	incomeType:[
				    
				    ],
			totalIncome:0,
		},
	    expense:{
	    	expenseType:[
				    
				    ],
			totalExpense:0,
		},
	    remainingAmount:0,
	    initiated:false
	  }

	calculateRemaining = () => {
		let income = this.state.income.totalIncome;
		let expense = this.state.expense.totalExpense;
		let remaining = income - expense;

		this.setState({remainingAmount:remaining,initiated:true})
		
	}

	calculateBudgetHandler = (type,name,value) => {
		
		if(type.value === "add") {
			let totalInc = 0;
			let totalExp = 0;
			let newState = {...this.state};
			let newData = {name:name.value,value:+value.value}
			newState.income.incomeType.push(newData);

			this.state.income.incomeType.forEach(inc => {
				totalInc += inc.value;
			})
			newState.income.totalIncome = totalInc;

			
			
			this.setState({newState})
		}
		
		if(type.value === "subtract") {
			let totalInc = 0;
			let totalExp = 0;
			let newState = {...this.state};
			let newData = {name:name.value,value:+value.value}
			newState.expense.expenseType.push(newData);

			this.state.expense.expenseType.forEach(inc => {
				totalExp += inc.value;
			})
			newState.expense.totalExpense = totalExp;

						
			this.setState({newState})
		}
		name.value = "";
		value.value = "";
		name.focus()

		this.calculateRemaining();

	}



	render() {
		
		return (
			<Aux>
				<div 
				className={classes.Top}
				 style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${back})`}} >
					<TotalIncome remaining={this.state.remainingAmount} />
					<Income income={this.state.income.totalIncome} />
					<Expense income={this.state.income.totalIncome} expense={this.state.expense.totalExpense} />

				</div>
				<BudgetForm sendData = {this.calculateBudgetHandler} />
				{this.state.initiated ? null : <h1 style={{fontSize:"30px",fontWeight:"300",textAlign:"center",color:"#333"}}>Start Adding Expenditure</h1>}
				<div style={{display:"flex",justifyContent:"space-around",padding:"3rem"}}>
					<IncomeDesc incomeDesc={this.state.income.incomeType} />
					<ExpenseDesc income={this.state.income.totalIncome} expenseDesc={this.state.expense.expenseType} />
				</div>
			</Aux>

			)
	}
}

export default Budget;