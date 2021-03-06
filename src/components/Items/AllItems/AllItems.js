import classes from './AllItems.module.css';
import ItemForm from './ItemForm';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const AllItems = (props) => {
const cartCtx = useContext(CartContext);

const price = `$${props.price}`;

const addToCartHandler = amount => {
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
    })

}
    return (
    <li className={classes.item}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div className={classes.image}>{props.image}</div>
        </div>
        <div>
            <ItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
    )
}

export default AllItems;