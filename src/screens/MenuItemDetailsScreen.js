import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import storesData from '../assets/data/stores.json';

const MenuItemDetailsScreen = () => {
    const route = useRoute();
    const { itemId } = route.params;

    const item = storesData.flatMap(store => store.menuItems).find(menuItem => menuItem.id === itemId);

    if (!item) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Item not found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Price: ${item.price}</Text>
            <Text style={styles.ingredientsTitle}>Ingredients:</Text>
            <Text style={styles.ingredients}>{item.ingredients.join(', ')}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    ingredients: {
        fontSize: 16,
        marginTop: 8,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MenuItemDetailsScreen;