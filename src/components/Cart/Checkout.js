import classes from '*.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
    })

const nameInputRef = useRef();

const confirmHandler = (event) => {
    event.preventDefault();
}

const enteredName = nameInputRef.current.value;
}

const enteredNameIsValid = !isEmpty(enteredName);

setFormInputsValidity({
    name: enteredNameIsValid,
})

const formIsValid=
    enteredNameIsValid;

if (!formIsValid) {
    return;
}

props.onConfirm({
    name: enteredName,
})

const nameControlClasses = `$(classes.control) ${
    formInputsValidity.name ? '' : classes.invalid
}`

return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
        </div>
        <div className={classes.actions}>
            <button type ='button' onClick={props.onCancel}>
                Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
)

export default Checkout;
