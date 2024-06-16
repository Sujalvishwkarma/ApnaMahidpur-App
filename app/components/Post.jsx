import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Sharing from 'expo-sharing';

export function Post(props) {
  const [Like, SetLike] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const iconSize = 30;
  
  const handleLike = () => {
    SetLike(!Like);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleComment = () => { }
  const handleShare = () => {
    Sharing.isAvailableAsync(true)
   }
  const handleSave = () => { }

  return (
    <View className="bg-white border border-slate-200 shadow-md shadow-slate-200 rounded-xl m-2 overflow-hidden">
      <View className="flex flex-row justify-between pr-5 pl-2 items-center">
        <View className="flex flex-row items-center py-1 gap-2">
          <Image
            className="h-12 w-12 rounded-full"
            source={{uri:props.image}}
          />
          <View className="flex flex-col">
            <Text className="text-sm">{props.userName?props.userName:'UserName'}</Text>
            <Text style={{fontSize:10}}>{props.location?props.location:'Location'}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback >
          <Ionicons name="ellipsis-vertical-outline" size={iconSize} color="black" />
        </TouchableWithoutFeedback>
      </View>
      <View className="w-full aspect-square border border-slate-200">
        <Image className="w-full aspect-square" source={{uri:props.image}} />
      </View>
      <View className="flex flex-row justify-between py-2 pl-1 pr-5">
        <View className="flex flex-row">
            <TouchableWithoutFeedback
              onPress={handleLike}
            >
              <Animated.View className="flex flex-row items-center mx-2" style={{ transform: [{ scale: scaleAnim }] }}>
                <Ionicons
                  name={Like ? "heart" : "heart-outline"}
                  size={iconSize}
                  color="#ff0000"
                />
            <Text
             className="text-xs"
            >
              {props.likes} Likes
            </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={handleComment}
            >
              <Animated.View className="flex flex-row items-center mx-2" style={{ transform: [{ scale: scaleAnim }] }}>
                <Ionicons
                  name={Like ? "heart" : "heart-outline"}
                  size={iconSize}
                  color="#ff0000"
                />
     
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={handleShare}
            >
              <Animated.View className="flex flex-row items-center mx-2" style={{ transform: [{ scale: scaleAnim }] }}>
                <Ionicons
                  name={Like ? "heart" : "heart-outline"}
                  size={iconSize}
                  color="#ff0000"
                />
              </Animated.View>
            </TouchableWithoutFeedback>
       
        </View>
        <TouchableWithoutFeedback
          className=""
          onPress={handleSave}
        >

          <Ionicons
            name={"bookmark-outline"}
            size={iconSize}
            color="#808080"
          />

        </TouchableWithoutFeedback>
      </View>
      <View style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 12 }}>
          {props.caption}
        </Text>
      </View>
    </View>
  );
}

