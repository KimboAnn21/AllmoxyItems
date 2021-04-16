import classes from "../Layout/Header.module.css";
import { Fragment } from "react";
import MKBShirt from '../assets/MKBShirt.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Allmoxy Boutique</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={MKBShirt} alt='Kindness is easy and costs nothing.' />
        </div>
    </Fragment>
};

export default Header;