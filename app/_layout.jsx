import React,{useEffect} from "react";
import { Stack } from "expo-router";
import * as Contacts from 'expo-contacts';
export default function _layout() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      <Stack.Screen name="pages/Auth/Login" options={{headerShown:false}} />
      <Stack.Screen name="pages/Auth/Register" options={{headerShown:false}} />
      
      <Stack.Screen name="pages/Home/AddPost" options={{headerTitle:"Add Post" }} />
      <Stack.Screen name="pages/Home/Notification" options={{headerTitle:"Notifications" }} />
      <Stack.Screen name="pages/Home/Chat" options={{headerTitle:"Chat" }} />
      <Stack.Screen name="pages/Business/MyBusiness" options={{headerTitle:"My Business" }} />
      <Stack.Screen name="pages/News/AddNews" options={{headerTitle:"Add News" }} />
      <Stack.Screen name="pages/Profile/EditProfile" options={{headerTitle:"Edit Profile" }} />
      <Stack.Screen name="pages/Profile/Setting" options={{headerTitle:"Settings" }} />
      <Stack.Screen name="index" />
    </Stack>
  );
}
