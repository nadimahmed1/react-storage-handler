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
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }


}

export { addToDb, removeFromDb };