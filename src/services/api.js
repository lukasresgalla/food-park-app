import { AsyncStorage } from 'react-native';
import storesData from '../assets/data/stores.json';

const API_URL = 'https://example.com/api'; // Replace with your actual API endpoint

export const fetchStores = async () => {
    try {
        const response = await fetch(`${API_URL}/stores`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching stores:', error);
        return storesData; // Fallback to local data
    }
};

export const fetchStoreDetails = async (storeId) => {
    try {
        const response = await fetch(`${API_URL}/stores/${storeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching store details:', error);
        return null; // Handle error appropriately
    }
};

export const fetchMenuItems = async (storeId) => {
    try {
        const response = await fetch(`${API_URL}/stores/${storeId}/menu`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        return []; // Return empty array on error
    }
};

export const saveCart = async (cartItems) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
};

export const loadCart = async () => {
    try {
        const cartData = await AsyncStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error loading cart:', error);
        return [];
    }
};