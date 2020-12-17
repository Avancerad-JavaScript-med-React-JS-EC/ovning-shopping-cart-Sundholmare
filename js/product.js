import React from 'react';


function Product(props){
    return(
        <div className="articleBox">
            <article className="item">
                <h1>{props.title}</h1>
                <h4>Av {props.author}</h4>
                <p>{props.text}</p>
                <button className="cartBtn">Add to cart</button>
            </article>
        </div>
    )
}

export default Product;