import classes from './Checkout.module.css';

const Checkout = (props) => {
    const confirmHandler = (event) => {
    event.preventDefault();
}

return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
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
