import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Cart from './cart';
import Product from './product';

function App(){
    let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod quas dolor magnam perspiciatis quaerat velit totam suscipit. Doloremque reprehenderit fugiat distinctio veritatis vel inventore necessitatibus tempore, aperiam sit non!'

    let count = 0;

    function add(e){
        e.preventDefault();
        console.log('click')
        console.log(count)
        return count +=1;
        
    }
    return(
        <div className="container">
            <nav>
                <Header />
                <Cart value={count}/>
            </nav>
            <div className="articleContainer">
                <Product matte={add} title="A Sign of Four" author="Sir Arthur Conan Doyle" text={content}/>
                <Product title="A Study in Scarlet" author="Sir Arthur Conan Doyle" text={content}/>
                <Product title="Baskervilles Hound" author="Sir Arthur Conan Doyle" text={content}/>
                <Product title="The Adventures of Sherlock Holmes" author="Sir Arthur Conan Doyle" text={content}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));