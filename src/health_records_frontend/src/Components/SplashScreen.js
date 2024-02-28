import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react';

const SPLASH_SCREEN_DURATION = 2000; // Time in milliseconds

const SplashScreen = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => setOpacity(1), SPLASH_SCREEN_DURATION);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleLogin = () => {
    // Replace with your actual login logic and navigation
    alert("Login clicked!");
  };

  const handleSignup = () => {
    // Replace with your actual signup logic and navigation
    alert("Sign Up clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity }}>
        <Image source={require('./your_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to Your App!</Text>
        <Text style={styles.description}>
          This application offers a wide range of features to help you with {/* Describe your app's purpose */}. Sign up or log in to get started.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
