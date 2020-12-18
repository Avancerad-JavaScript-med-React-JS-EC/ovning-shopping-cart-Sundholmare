import React from 'react';

function Cart(props){

    return(
        <h3 className="cart">Cart<span className="shopCount">{props.value}</span></h3>
    )
}

export default Cart;