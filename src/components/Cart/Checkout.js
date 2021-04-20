import classes from './Checkout.module.css';
import { useRef, useState } from 'react';
//import CartContext from '../store/CartContext';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {
  const [formInputsValidity, setInputFormInputsValidity] = useState({
    name: true
  })
    const nameInputRef = useRef();

    const confirmHandler = (event) => {
    event.preventDefault();
}
const enteredName = nameInputRef.current.value;

const enteredNameIsValid = !isEmpty(enteredName);

setInputFormInputsValidity ({
  name: enteredNameIsValid
})

const formIsValid = enteredNameIsValid;

if (!formIsValid) {
  return;
}

props.onConfirm({
  name: enteredName
});

return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={`${classes.control} ${formInputsValidity.name ? '': classes.invalid}`}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
)
}
export default Checkout;
