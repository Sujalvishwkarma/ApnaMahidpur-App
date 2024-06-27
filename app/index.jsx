import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function index() {

  return (
    <>
      <SafeAreaView className="h-screen bg-white p-2">
        <View className="flex items-center p-2">
          <Image
            style={{height:300,width:300}}
            source={require("../assets/images/company-logo.png")}
          />
          <Text style={{fontSize:12}} className=" text-slate-700">WelCome To</Text>
          <Text style={{fontSize:18}} className="font-extrabold  text-red-800">Apna Mahidpur</Text>
          <Text className="text-sm text-slate-700">Apne shahar ki apani baat</Text>
          <View className="text-center mt-5">
            <Text className="text-slate-70000">The app for every</Text>
            <Text className="font-bold text-center text-teal-900">#Mahidpurian</Text>
          </View>
        </View>
        <View className="mt-8">
          <Text className="font-bold text-sm">Please read this instruction carefully.</Text>
          <View className="border border-slate-300 bg-slate-100 rounded-xl shadow-lg p-3 ">
            <Text style={{fontSize:12}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque, error quae harum voluptate vel at unde accusamus ipsam deleniti?</Text>
          </View>
        </View>
        <Link
        style={{fontSize:12,padding:18}}
          className="absolute rounded-2xl left-2 bottom-2 right-2 bg-slate-800 text-center text-white font-bold"
          href={"pages/Profile/Setting"}
        >
          Get Started
        </Link>
      </SafeAreaView>
      <StatusBar backgroundColor="white" animated={true} />
    </>
  );
}
