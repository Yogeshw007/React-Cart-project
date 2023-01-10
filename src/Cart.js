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
                    img: '',
                    id: 1
                },
                {
                    price: 5,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 50,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQty = (product) => {
        const { products } = this.state;

        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        });
    }

    handleDecreaseQty = (product) => {
        const { products } = this.state;

        const index = products.indexOf(product);

        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        });
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => {
            return item.id !== id;
        });

        this.setState({
            products: items
        });
    }

    render() {
        const { products } = this.state;

        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            onIncreaseQty={this.handleIncreaseQty}
                            onDecreaseQty={this.handleDecreaseQty}
                            onDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        )
    }

}

export default Cart;