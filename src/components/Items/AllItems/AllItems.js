import classes from './AllItems.module.css';
import ItemForm from './ItemForm';

const AllItems = props => {
    const price = `$${props.price.toFixed(0)}`;

    const addItemToCartHandler = amount => {

    }

    return (
    <li className={classes.item}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            <div className={classes.image}>{props.image}</div>
        </div>
        <div>
            <ItemForm onAddToCart={addItemToCartHandler}/>
        </div>
    </li>
    )
}

export default AllItems;