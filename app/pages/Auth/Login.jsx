import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

export default function Login() {
  const navigation = useNavigation();
  const [UserName, SetUserName] = useState('');
  const [Password, SetPassword] = useState('');

  const handleLogin = async () => {
    if (UserName.trim() === '' || Password.trim() === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      // Sign in user using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, UserName, Password);
      const user = userCredential.user;

      // Navigate to the desired screen upon successful login
      navigation.navigate('(tabs)'); // Replace 'Home' with your desired screen

      // Clear input fields
      SetUserName('');
      SetPassword('');
    } catch (error) {
      console.error('Error logging in:', error.message);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        Alert.alert('Invalid Credentials', 'The username or password is incorrect. Please try again.');
      } else if (error.code === 'auth/invalid-credential') {
        Alert.alert('Invalid Credentials', 'Invalid credentials provided-. Please check your username and password.');
      } else {
        Alert.alert('Login Error', 'An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <View className="bg-white h-full p-5">
      <SafeAreaView>
        <View className="flex w-full justify-center items-center p-5">
          <Image
            className="h-36 aspect-square"
            source={require('../../../assets/images/company-logo.png')}
          />
        </View>
        <Text className="font-bold text-xl text-center">Login</Text>
        <View className="flex flex-col mt-5 p-2">
          <View>
            <Text>Username</Text>
            <TextInput
              placeholder="Username"
              value={UserName}
              onChangeText={SetUserName}
              className="shadow-2xl shadow-emerald-900 px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View className="mt-5">
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              value={Password}
              onChangeText={SetPassword}
              secureTextEntry
              className="shadow-2xl shadow-emerald-900 px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View>
            <TouchableHighlight
              className="mt-5 bg-emerald-800 rounded-lg"
              onPress={handleLogin}
            >
              <View>
                <Text className="text-center p-3 text-white">Login</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View className="mt-5">
            <Text className="text-center">Not Registered?</Text>
            <TouchableHighlight>
              <Link
                href="pages/Auth/Register"
                className="mx-auto bg-slate-800 rounded-lg p-2"
              >
                <Text className="text-center p-2 text-white">SignUp</Text>
              </Link>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="white" animated={true} />
    </View>
  );
}
