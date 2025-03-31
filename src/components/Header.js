import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <View style={styles.navLinks}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navLink}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Events')}>
                    <Text style={styles.navLink}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
                    <Text style={styles.navLink}>Stores</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.navLink}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 3,
    },
    logo: {
        width: 100,
        height: 40,
    },
    navLinks: {
        flexDirection: 'row',
    },
    navLink: {
        marginHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
});

export default Header;