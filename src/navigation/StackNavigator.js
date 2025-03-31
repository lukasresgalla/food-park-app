import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import StoresScreen from '../screens/StoresScreen';
import StoreDetailsScreen from '../screens/StoreDetailsScreen';
import MenuScreen from '../screens/MenuScreen';
import MenuItemDetailsScreen from '../screens/MenuItemDetailsScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Events" component={EventsScreen} />
                <Stack.Screen name="Stores" component={StoresScreen} />
                <Stack.Screen name="StoreDetails" component={StoreDetailsScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="MenuItemDetails" component={MenuItemDetailsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;