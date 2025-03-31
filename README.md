# Food Park App

## Overview
The Food Park App is a mobile application developed using React Native, designed to provide users with information about a food park, including various food and beverage stores, weekly events, and a shopping cart feature for ordering food items.

## Features
- **Splash Screen**: Displays the logo of the food park.
- **Home Screen**: Provides general information about the food park, including images, address, contact information, and links to social media.
- **Events Screen**: Lists the weekly events schedule with videos of the artists.
- **Stores Screen**: Displays a list of food and beverage stores available in the food park.
- **Store Details Screen**: Shows detailed information about each store, including images, descriptions, and contact information.
- **Menu Screen**: Lists menu items for a selected store with thumbnails, names, and prices.
- **Menu Item Details Screen**: Provides detailed information about a selected menu item, including images, descriptions, ingredients, and price.
- **Cart Screen**: Allows users to view, modify, or remove items from their shopping cart.

## Project Structure
```
food-park-app
├── src
│   ├── assets
│   │   ├── images
│   │   └── data
│   │       └── stores.json
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── EventCard.js
│   ├── navigation
│   │   ├── DrawerNavigator.js
│   │   ├── BottomTabNavigator.js
│   │   └── StackNavigator.js
│   ├── screens
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── EventsScreen.js
│   │   ├── StoresScreen.js
│   │   ├── StoreDetailsScreen.js
│   │   ├── MenuScreen.js
│   │   ├── MenuItemDetailsScreen.js
│   │   └── CartScreen.js
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── globalStyles.js
│   └── utils
│       └── AsyncStorageHelper.js
├── App.js
├── package.json
├── README.md
└── .babelrc
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/food-park-app.git
   ```
2. Navigate to the project directory:
   ```
   cd food-park-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application, use the following command:
```
npm start
```
This will start the Metro bundler. You can then run the app on an emulator or a physical device.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.