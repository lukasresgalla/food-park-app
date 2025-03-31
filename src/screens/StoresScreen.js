import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fetchStores } from '../services/api';

const StoresScreen = ({ navigation }) => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadStores = async () => {
            const data = await fetchStores();
            setStores(data);
        };
        loadStores();
    }, []);

    const renderStoreItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.storeItem} 
            onPress={() => navigation.navigate('StoreDetailsScreen', { storeId: item.id })}
        >
            <Image source={{ uri: item.banner }} style={styles.storeImage} />
            <Text style={styles.storeName}>{item.name}</Text>
            <Text style={styles.storeDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={stores}
                renderItem={renderStoreItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        padding: 16,
    },
    storeItem: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 2,
    },
    storeImage: {
        width: '100%',
        height: 150,
    },
    storeName: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
    },
    storeDescription: {
        fontSize: 14,
        paddingHorizontal: 8,
        paddingBottom: 8,
        color: '#666',
    },
});

export default StoresScreen;