import React from 'react'
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: ''
                },
                {
                    price: 5,
                    title: 'Watch',
                    qty: 10,
                    img: ''
                },
                {
                    price: 50,
                    title: 'Laptop',
                    qty: 1,
                    img: ''
                }
            ]
        }
    }

    render() {
        const { products } = this.state;

        return (
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem product={product} />
                })}
            </div>
        )
    }

}

export default Cart;