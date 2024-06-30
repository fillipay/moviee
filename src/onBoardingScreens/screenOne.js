import React from 'react';
import { Image, View, StyleSheet, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import LottieView from 'lottie-react-native';

const CustomButtonsOnboarding = () => {
  const navigation = useNavigation(); // Initialize navigation hook



  const Done = ({ isLight, ...props }) => (
    <View style={styles.buttonContainer}>
      <Button
        title={'Done'} // Navigate to Home screen on done
        buttonStyle={{
          backgroundColor: isLight ? 'blue' : 'lightblue',
        }}
        containerStyle={{
          marginVertical: 10,
          width: 70,
        }}
        titleStyle={{ color: isLight ? 'white' : 'black' }}
        {...props}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Onboarding
        DoneButtonComponent={Done}
        onDone={() => navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: '#000',
            image: (
              <LottieView
                source={require('../animations/Animation - 1719781725248.json')} // Replace with your Lottie animation file path
                autoPlay
                loop
                style={styles.lottieAnimation}
              />
            ),
            title: 'Movie Explorer Lite',
            subtitle: 'Movie Explorer Lite where Entertainment Begins',
          },
          // Add more pages as needed
        ]}
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieAnimation: {
    width: 400, // Adjust width as needed
    height: 400, // Adjust height as needed
  },
});

export default CustomButtonsOnboarding;
