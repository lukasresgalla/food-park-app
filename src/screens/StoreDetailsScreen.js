import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import storesData from '../assets/data/stores.json';
import styles from '../styles/globalStyles';

const StoreDetailsScreen = () => {
    const route = useRoute();
    const { storeId } = route.params;
    const [store, setStore] = useState(null);

    useEffect(() => {
        const selectedStore = storesData.find(store => store.id === storeId);
        setStore(selectedStore);
    }, [storeId]);

    if (!store) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: store.banner }} style={styles.bannerImage} />
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.storeDescription}>{store.description}</Text>
            <Text style={styles.contactTitle}>Contact Information:</Text>
            <Text>Phone: {store.phone}</Text>
            <Text>WhatsApp: {store.whatsapp}</Text>
            <Text>Email: {store.email}</Text>
            <Text>Social Media: {store.socialMedia}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Open Delivery App" onPress={() => Linking.openURL(store.deliveryLink)} />
                <Button title="View Menu" onPress={() => Linking.openURL(store.menuLink)} />
            </View>
        </ScrollView>
    );
};

export default StoreDetailsScreen;