// use local storage to manage cart data

const addToDb = id => {
    let shoppingCart;

    const getShoppingCart = localStorage.getItem('shopping-cart');
    if (getShoppingCart) {
        shoppingCart = JSON.parse(getShoppingCart);
    }
    else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = id => {
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        const setCart = JSON.parse(getCart);
        if (id in setCart) {
            delete setCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(setCart))
        }
    }


}

// Reduce
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total
}

export { addToDb, removeFromDb, getTotalPrice };