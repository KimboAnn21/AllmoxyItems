import classes from '../../UI/Input.module.css';
import Input from '../../UI/input';
import { useRef } from 'react';

const ItemForm = (props) => {
    const amountInputRef = useRef();

const submitHandler = event => {
    event.preventDefault();

const enteredAmount = amountInputRef.current.value;
const enteredAmountNumber = +enteredAmount;

//if (
//    enteredAmount.trim().length === 0 ||
//    enteredAmountNumber < 1 || 
//    enteredAmountNumber > 5 
//  )  { 
  //  return null;
 //   (props.onAddToCart(enteredAmountNumber);
  
}
    return (        
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref ={amountInputRef}
        label='Amount'
        input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            default: '1'
        }}/>
        <button>+Add</button>
    </form>
    )
}


export default ItemForm;