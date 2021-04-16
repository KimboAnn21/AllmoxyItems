import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>  
        {[{ id: 7701, name: 'MKB Shirt', qty: 4, price: 24}].map((item)=>
        <li>{item.name}</li>
        )}
        </ul>
        );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>40</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Place Order</button>
            </div>
        </Modal>
    )
}

export default Cart;