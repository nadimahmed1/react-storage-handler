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

export { addToDb };