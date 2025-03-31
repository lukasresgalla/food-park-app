import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>© 2023 Food Park. All rights reserved.</Text>
            <Text 
                style={styles.linkText} 
                onPress={() => Linking.openURL('https://www.foodpark.com/privacy-policy')}
            >
                Privacy Policy
            </Text>
            <Text 
                style={styles.linkText} 
                onPress={() => Linking.openURL('https://www.foodpark.com/terms-of-service')}
            >
                Terms of Service
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    footerText: {
        fontSize: 14,
        color: '#333',
    },
    linkText: {
        fontSize: 14,
        color: '#007BFF',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
});

export default Footer;