import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation, Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import * as Crypto from "expo-crypto";

export default function Register() {
  const navigation = useNavigation();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = async () => {
    if (
      Name.trim() === "" ||
      Phone.trim() === "" ||
      Email.trim() === "" ||
      Password.trim() === ""
    ) {
      Alert.alert("Please fill in all fields");
      return;
    }

    try {
      // Hash password using Crypto (optional but recommended for security)
      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Password
      );

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const user = userCredential.user;

      // Add user data to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: Name,
        phone: Phone,
        email: Email,
        bio: "Hey I am Mahidpurian",
        created_at: new Date().toISOString(),
        followers_count: 0,
        following_count: 0,
        posts_count: 0,
        is_verified: false,
        is_admin: false,
        last_login: null,
        hashed_password: hashedPassword,
      });

      Alert.alert("Registered successfully!");
      navigation.navigate("pages/Auth/Login"); // Navigate to login screen
    } catch (error) {
      console.error("Error registering user:", error.message);
      if (error.code === "auth/email-already-in-use") {
        Alert.alert(
          "Email Already in Use",
          "The email address is already registered."
        );
      } else if (error.code === "auth/weak-password") {
        Alert.alert(
          "Weak Password",
          "Password should be at least 6 characters."
        );
      } else {
        Alert.alert(
          "Registration Error",
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <View className="bg-white h-full p-5">
      <SafeAreaView>
        <View className="flex w-full justify-center items-center px-5">
          <Image
            className="h-36 aspect-square"
            source={require("../../../assets/images/company-logo.png")}
          />
        </View>
        <Text className="font-bold text-xl text-center">Register</Text>
        <View className="flex flex-col  p-2">
          <View>
            <Text>Name</Text>
            <TextInput
              placeholder="Name"
              value={Name}
              onChangeText={setName}
              className="shadow-2xl shadow-emerald-900  px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View>
            <Text>Phone</Text>
            <TextInput
              placeholder="Phone"
              value={Phone}
              onChangeText={setPhone}
              className="shadow-2xl shadow-emerald-900  px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View>
            <Text>Email</Text>
            <TextInput
              placeholder="Email"
              value={Email}
              onChangeText={setEmail}
              className="shadow-2xl shadow-emerald-900  px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View className="">
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              value={Password}
              onChangeText={setPassword}
              secureTextEntry
              className="shadow-2xl shadow-emerald-900  px-5 py-3 rounded-xl bg-white"
            />
          </View>
          <View>
            <TouchableHighlight
              className="mt-5 bg-emerald-800 rounded-lg"
              onPress={handleRegister}
            >
              <View>
                <Text className="text-center p-3 text-white">Register</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View className="mt-5">
            <Text className="text-center">Already registered?</Text>
            <TouchableHighlight>
              <Link
                href="pages/Auth/Login"
                className="mx-auto bg-slate-800 rounded-lg p-2"
              >
                <Text className="text-center p-2 text-white">Login</Text>
              </Link>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="white" animated={true} />
    </View>
  );
}
