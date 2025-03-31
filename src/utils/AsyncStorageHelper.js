import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_KEY = '@shopping_cart';

export const getCartItems = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(CART_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error("Failed to fetch cart items", e);
        return [];
    }
};

export const addToCart = async (item) => {
    try {
        const currentCart = await getCartItems();
        const updatedCart = [...currentCart, item];
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    } catch (e) {
        console.error("Failed to add item to cart", e);
    }
};

export const removeFromCart = async (itemId) => {
    try {
        const currentCart = await getCartItems();
        const updatedCart = currentCart.filter(item => item.id !== itemId);
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    } catch (e) {
        console.error("Failed to remove item from cart", e);
    }
};

export const clearCart = async () => {
    try {
        await AsyncStorage.removeItem(CART_KEY);
    } catch (e) {
        console.error("Failed to clear cart", e);
    }
};