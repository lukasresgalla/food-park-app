import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';

const HomeScreen = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.splashContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Bem-vindo ao Pátio Gastronômico!</Text>
                <Text style={styles.description}>
                    O Pátio Gastronômico oferece uma variedade de opções de alimentação e bebidas, além de eventos
                    emocionantes para toda a família.
                </Text>
                <Text style={styles.contactTitle}>Contato:</Text>
                <Text>Telefone: (11) 1234-5678</Text>
                <Text>WhatsApp: (11) 98765-4321</Text>
                <Text>Email: contato@patiogastronomico.com</Text>
                <Text style={styles.socialTitle}>Redes Sociais:</Text>
                <Text onPress={() => Linking.openURL('https://facebook.com/patiogastronomico')} style={styles.link}>
                    Facebook
                </Text>
                <Text onPress={() => Linking.openURL('https://instagram.com/patiogastronomico')} style={styles.link}>
                    Instagram
                </Text>
                <Text onPress={() => Linking.openURL('https://patiogastronomico.com')} style={styles.link}>
                    Website
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    socialTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginVertical: 5,
    },
});

export default HomeScreen;