import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const pets = [
  { id: 1, name: 'Fluffy', description: 'Friendly and playful cat', image: require('./assets/cat1.jpg') },
  { id: 2, name: 'Max', description: 'Loyal and energetic cat', image: require('./assets/cat2.jpg') },
  { id: 3, name: 'Bella', description: 'Cute and cuddly cat', image: require('./assets/cat3.jpg') },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleSwipe}
        style={styles.scrollView}
      >
        {pets.map(pet => (
          <View key={pet.id} style={styles.slide}>
            <Image source={pet.image} style={styles.image} />
            <Text style={styles.name}>{pet.name}</Text>
            <Text style={styles.description}>{pet.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setCurrentIndex(currentIndex + 1)}
          style={[styles.button, { backgroundColor: 'red' }]}
        >
          <Text style={styles.buttonText}>Nope</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentIndex(currentIndex + 1)}
          style={[styles.button, { backgroundColor: 'green' }]}
        >
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
