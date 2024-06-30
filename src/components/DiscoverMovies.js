import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GET } from '../services/API';
import { SliderBox } from 'react-native-image-slider-box';
import { IMAGE_POSTER_URL } from '../api/config';
import Constants from '../Constants';
import { Text } from 'react-native-paper';

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await GET('/discover/movie');
        setMovies(response.results);

        const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);

        let backImages = [];
        for (let i = 0; i < 10 && i < images.length; ++i) {
          backImages.push(images[i]);
        }

        setImages(backImages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }

    };

    getMovies();
  }, []);

   return (
    <View style={styles.container}>
        <Text style={styles.title}>Discover Movies</Text>
      <SliderBox
        images={images}
        ImageComponentStyle={styles.imageStyle}
        dotColor={Constants.secondaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop: 10,
  },
  title: {
    color: Constants.primaryColor,
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
    marginLeft: 10,
  },
  imageStyle: {
    width: 300, 
    height: 300, 
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default DiscoverMovies;