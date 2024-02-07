import React, { useState } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightToBracket, icon } from '@fortawesome/free-solid-svg-icons';
import { ImageBackground } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleRegister = () => {
    console.log(`Full Name: ${fullName}, Email: ${email}, Username: ${username}, Password: ${password}`);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Mu</Text>
      <Text style={styles.description}>Music Recommendations</Text>
      {isRegistering && (
  <>
    <TextInput
      style={styles.input}
      placeholder="Full Name"
      value={fullName}
      onChangeText={setFullName}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  </>
)}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {isRegistering ? (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login<FontAwesomeIcon icon={faRightToBracket} /></Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.button} onPress={() => setIsRegistering(!isRegistering)}>
        <Text style={styles.buttonText}>{isRegistering ? "Back To Login" : "Register"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#36588C',
    paddingTop: 20,
  },
  title: {
    fontSize: 280,
    fontWeight: 'bold',
    marginBottom: -50,
    paddingTop: 150,
    color: '#FFCBA5',

  },
  description:{
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color:'#FFCBA5',
  },
  button: {
    backgroundColor: '#36588C',
    padding: 10,
    borderRadius: 10,
    margin: 0,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 60,
  },
  input: {
    height: 50,
    width: '65%',
    borderColor: '#FFCBA5',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 15,
    color: '#FFCBA5',
  },
  buttonText: {
    color: '#FFCBA5',
    fontWeight: 'bold',
    fontSize: 30,
    

  },
});

AppRegistry.registerComponent('GoApp', () => App);

export default App;