import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Profile() {
  function ProfilePost() {
    return (
      <View
        style={{
          aspectRatio: 1,
          width: "30%",
          borderWidth: 1,
          borderColor: "rgba(0,0,0,.05)",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/company-logo.png")}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="p-3 border border-slate-200 rounded-xl shadow-lg shadow-slate-600 m-5 bg-white">
        <View className="flex flex-row items-center gap-2">
          <Image
            className="w-20 h-20 rounded-full"
            source={require("../../assets/images/user.png")}
          />
          <View className="flex flex-1 flex-row overflow-hidden">
            <View className="flex-1">
              <Text className="text-center font-bold">200</Text>
              <Text style={{ fontSize: 10, textAlign: "center" }}>Posts</Text>
            </View>
            <View className="flex-1">
              <Text className="text-center font-bold">200</Text>
              <Text style={{ fontSize: 10, textAlign: "center" }}>
                Followers
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-center font-bold">200</Text>
              <Text style={{ fontSize: 10, textAlign: "center" }}>
                Following
              </Text>
            </View>
          </View>
        </View>
        <Text className="font-bold">Sujal Vishwkarma</Text>
        <Text style={{fontSize:10}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          accusamus!
        </Text>
        <View>
          
        </View>
      </View>
      <Text className="bg-white mx-5 p-2 text-xs font-bold rounded-t-md">
        My Posts
      </Text>
      <View className="mx-5 bg-white p-1 flex flex-row flex-wrap rounded-b-md justify-center">
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </View>
    </ScrollView>
  );
}
