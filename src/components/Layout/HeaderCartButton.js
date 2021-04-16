import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const countCartItems = cartCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount;
      }, 0
    );

    return (
    
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Items</span>
        
    </button>
    
    )
}

export default HeaderCartButton;