import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {POSTER_IMAGE} from '../api/config';
import {GET} from '../services/API';
import Styles from '../Styles';
import Loader from './Loader';
import Constants from '../Constants';

const TrendingMovies = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET('/movie/top_rated');
      setMovies(data.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Trending Movies</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            horizontal
            renderItem={item => displayMovies(item)}
          />
        </View>
      )}
    </View>
  );
};


const displayMovies = ({item}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
     marginTop: 30,
    },
    title: {
      color: Constants.primaryColor,
      fontSize: 24, 
      fontWeight: 'bold',
      marginBottom: 20, 
      marginLeft: 10,
    },

});

export default TrendingMovies;