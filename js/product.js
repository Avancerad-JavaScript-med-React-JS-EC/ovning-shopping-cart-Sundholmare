import React from 'react';


function Product(props){
    return(
        <article className="item">
            <h1>{props.title}</h1>
            <h4>Av {props.author}</h4>
            <p>{props.text}</p>
            <button onClick={props.matte} className="cartBtn">Add to cart</button>
        </article>
    )
}

export default Product;