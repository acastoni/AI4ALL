import React, { useState } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Reps</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <Image 
        style={styles.image}
        source={{uri: 'https://media.giphy.com/media/CJRKhi0sixPav1P6MN/giphy.gif' }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 80,
  },
});

AppRegistry.registerComponent('GoApp', () => App);

export default App;