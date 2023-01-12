import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }

    this.db = firebase.firestore()
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    console.log(product.id)

    // products[index].qty += 1;

    // this.setState({
    //   products
    // });

    const docRef = this.db.collection('products').doc(product.id);

    docRef
      .update({
        qty: product.qty + 1
      })
      .then(() => {
        console.log('Update increase quantity successfully');
      })
      .catch((error) => {
        console.log('Error in updating increase quantity in firebase', error);
      })

  }

  handleDecreaseQty = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // });

    const docRef = this.db.collection('products').doc(product.id);

    docRef
      .update({
        qty: product.qty - 1
      })
      .then(() => {
        console.log('Update decrease quantity successfully');
      })
      .catch((error) => {
        console.log('Error in updating the decrease quantity in firebase', error);
      });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => {
      return item.id !== id;
    });

    // this.setState({
    //   products: items
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Product deleted successfuly!!');
      })
      .catch((error) => {
        console.log('Error in deleting product from firebase', error);
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getTotalPrice = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal += product.price * product.qty;
    });

    return cartTotal;
  }

  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   let products = snapshot.docs.map((doc) => {
    //     const data = doc.data();

    //     data['id'] = doc.id;

    //     return data;
    //   });

    //   this.setState({
    //     products: products,
    //     loading: false
    //   })

    // });

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        let products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        });

        this.setState({
          products: products,
          loading: false
        })
      });
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        price: 50,
        title: 'Laptop',
        qty: 1,
        img: 'https://cdn-icons-png.flaticon.com/512/1055/1055329.png',
      })
      .then((docRef) => {
        console.log('Product added successfully', docRef);
      })
      .catch((err) => {
        console.log('Error in adding product', err);
      })
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App" >
        <Navbar
          qty={this.getCartCount()}
        />
        {loading && <h1>Loading products...</h1>}
        <button onClick={this.addProduct} style={{ fontSize: 20, padding: 20 }}>Add product</button>
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize: 20, padding: 10 }}>TOTAL : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
