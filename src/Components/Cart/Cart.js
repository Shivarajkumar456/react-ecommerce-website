import React from 'react';
import Modal  from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =(props) => {
    const CartItems = <ul className={classes['cart-items']}>
        {[{id:'p1', title:'Colors', price:100, quantity:2}].map((item)=><li>{item.title} {item.price} {item.quantity}</li>)}
    </ul>
   return <Modal onClose={props.onClose}>
   {CartItems}
    <div className={classes.total}>
        <span>Toatal Amount</span>
        <span>$200</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Purchase</button>
    </div>
   </Modal>
}

export default Cart;