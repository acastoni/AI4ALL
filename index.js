import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Go App</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
  },
});

AppRegistry.registerComponent('GoApp', () => App);

export default App;