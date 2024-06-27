
import React from "react";
import { Image, View, Text, TouchableHighlight,TouchableNativeFeedback } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function BusinessBox(props) {
  return (
    <TouchableHighlight
      underlayColor="#ddd"
      onPress={() => alert("Business pressed")}
    >
      <View className="border border-slate-200 bg-white flex mx-1 justify-center items-center rounded-md overflow-hidden w-24 aspect-square relative">
        <Image
          className="w-full aspect-square"
          source={{
            uri: props.image,
          }}
        />
        {props.name && <Text style={{ fontSize: 8 }} className="absolute bottom-1 px-2 rounded-md bg-black text-xs text-white">{props.name}</Text>}
      </View>
    </TouchableHighlight>
  );
}

export function SettingButton(props){
  return(
    <TouchableNativeFeedback>
    <View className={`flex rounded-xl my-1 flex-row justify-between p-3 border border-slate-400 ${(props.type=="logout") && 'bg-black'}`}>
      <View className="flex flex-row items-center">
        <Ionicons
          name={props.icon}
          size={25}
          color="grey"
        />
        <Text className={`ml-2 font-bold text-sm ${(props.type=="logout") && 'text-white'}`}>{props.title}</Text>
      </View>
      <Ionicons
        name={"arrow-forward-outline"}
        size={25}
        color="grey"
      />
    </View>
  </TouchableNativeFeedback>
  )
}