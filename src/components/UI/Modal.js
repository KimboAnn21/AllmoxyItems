import ReactDOM from 'react-dom';
import React from 'react';
import { Fragment } from 'react';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )
}
const portalElement = document.getElementById('Overlays');
//ReactDOM.Fragment breaks the Modal and I am not sure why.  
const Modal = props => {
    return (
    <Fragment>
    <Backdrop onClose={props.onClose}/>
    <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
    )  
}

export default Modal; 