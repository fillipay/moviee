import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import DiscoverMovies from './components/DiscoverMovies';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrendingMovies from './components/TrendingMovies';


const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchbar}
    />
    </View>
    <DiscoverMovies/>
    <TrendingMovies/>
    </SafeAreaView>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  searchbar: {
    width: '80%', // Adjust the width as needed
  },
  smallText: {
    color: '#000000',
  },
});
