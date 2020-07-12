import React,{useRef} from 'react';
import classes from './BudgetForm.css';
const budgetForm = props => {

	const select = useRef();
	const desc = useRef();
	const value = useRef();

	document.addEventListener("keypress",(e) => {
		
		if(e.keyCode === 13 || e.which === 13) {
			if(select.current.value !== "" && desc.current.value !== "" && value.current.value !== "") {
				props.sendData(select.current,desc.current,value.current);
			}
			
		}
	})

	
	return (
		<div className={classes.BudgetForm}>
			<select ref={select} name="select"  >
				<option value="add">+</option>
				<option value="subtract">-</option>
			</select>
			<input ref={desc} name="desc"   type="text" placeholder="Add Description" style={{margin:"0 1rem",width:"350px"}} />
			<input ref={value} name="value" style={{width:"90px"}}   type="number" placeholder="Value" />
			
		</div>
		)
}

export default budgetForm;