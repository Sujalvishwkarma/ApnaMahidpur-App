import React,{useState} from "react";
import { View, Text, Button, Image } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function index() {

  const [isSelected, setSelection] = useState(false);
  return (
    <>
      <SafeAreaView className="h-screen bg-white border p-2">
        <View className="flex items-center border p-2">
          <Image
            className="w-48 h-48"
            source={require("../assets/images/company-logo.png")}
          />
          <Text className="text-sm text-slate-700">WelCome To</Text>
          <Text className="font-extrabold text-2xl text-red-800">Apna Mahidpur</Text>
          <Text className="text-sm text-slate-700">Apne shahar ki apani baat</Text>
          <View className="text-center mt-5">
            <Text className="text-slate-70000">The app for every</Text>
            <Text className="font-bold text-center text-teal-900">#Mahidpurian</Text>
          </View>
        </View>
        <View className="mt-8">
          <Text className="font-bold text-sm">Please read this instruction carefully.</Text>
          <View className="border p-3 ">
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque, error quae harum voluptate vel at unde accusamus ipsam deleniti?</Text>
          </View>
          <View>
            <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          
        />
          </View>
        </View>
        <Link
          className="absolute left-2 bottom-2 right-2 p-2 bg-slate-800 text-center text-white font-bold"
          href={"pages/Auth/Login"}
        >
          Get Started
        </Link>
      </SafeAreaView>
      <StatusBar backgroundColor="white" animated={true} />
    </>
  );
}
