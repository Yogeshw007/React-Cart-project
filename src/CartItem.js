import React from 'react';

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { onIncreaseQty, onDecreaseQty, onDeleteProduct, product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>Rs {price} </div>
          <div style={{ color: '#777' }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            <img
              style={styles.button}
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
              onClick={() => onIncreaseQty(product)}
            />
            <img
              style={styles.button}
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
              onClick={() => onDecreaseQty(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              onClick={() => { onDeleteProduct(product.id) }}
            />
          </div>
        </div>
      </div >
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
  button: {
    border: '1px solid black',
    borderRadius: '50%',
    fontSize: '0.8'
  }
}

export default CartItem;