import classes from './ItemSummary.module.css';

const ItemSummary = () => {
    return (
        <section className={classes.summary}>
        <p>
            And for the acts of kindness in you, grab one of our MKB Shirts! <br />
            100% of your tshirt purchase goes to the non-profit: <br />
            MYSTERY KINDNESS BRIGADE {"http://www.mysterykindnessbrigade.org"}
        </p>
    </section>
    )
}

export default ItemSummary;