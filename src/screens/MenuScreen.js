import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorageHelper from '../utils/AsyncStorageHelper';
import storesData from '../assets/data/stores.json';

const MenuScreen = ({ route, navigation }) => {
    const { storeId } = route.params;
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const store = storesData.find(store => store.id === storeId);
        if (store) {
            setMenuItems(store.menuItems);
        }
    }, [storeId]);

    const handleMenuItemPress = (item) => {
        navigation.navigate('MenuItemDetailsScreen', { item });
    };

    const renderMenuItem = ({ item }) => (
        <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress(item)}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    list: {
        paddingBottom: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    thumbnail: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
    },
});

export default MenuScreen;