import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from './Constants';
import screenOne from './onBoardingScreens/screenOne'; // Import your onboarding component
import Home from './Home';

export type RootStackParamList = {
  screenOne: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true); // State to track if it's the first launch

  useEffect(() => {
    // Check if the app has been launched before (you can use AsyncStorage or any other persistent storage)
    // For demonstration purpose, I'm using a simple state here
    const checkFirstLaunch = async () => {
      // Replace with your logic to check if it's the first launch
      // Example: const isFirstLaunch = await AsyncStorage.getItem('firstLaunch');
      setIsFirstLaunch(true); // Set state based on your logic
    };

    checkFirstLaunch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? 'screenOne' : 'Home'}>
        <Stack.Screen
          name='screenOne'
          component={screenOne}
          options={{ headerShown: false }} // Hide header for onboarding screen
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={headerStyle} // Header options for Home screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerStyle = {
  title: 'Movies Explorer Lite',
  headerStyle: { backgroundColor: Constants.primaryColor },
  headerTitleStyle: { color: Constants.textColor },
};

export default App;
