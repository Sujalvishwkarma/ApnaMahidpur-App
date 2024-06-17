import React, { useEffect } from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="pages/Auth/Login" options={{ headerShown: false }} />
      <Stack.Screen name="pages/Auth/Register" options={{ headerShown: false }} />
      <Stack.Screen name="pages/Home/AddPost" options={{ headerTitle: "Add Post" }} />
      <Stack.Screen name="pages/Home/Notification" options={{ headerTitle: "Notifications" }} />
      <Stack.Screen name="pages/Home/Chat" options={{ headerTitle: "Chat" }} />
      <Stack.Screen name="pages/Business/MyBusiness" options={{ headerTitle: "My Business" }} />
      <Stack.Screen name="pages/News/AddNews" options={{ headerTitle: "Add News" }} />
      <Stack.Screen name="pages/Profile/EditProfile" options={{ headerTitle: "Edit Profile" }} />
      <Stack.Screen name="pages/Profile/Setting" options={{ headerTitle: "Settings" }} />
      {/* <Stack.Screen name="index" /> */}
    </Stack>
  );
}

// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import React, { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebaseConfig";
// import { Stack } from "expo-router";


// export default function _Layout() {

//   const auth = getAuth(app);
//   const [initializing, setInitializing] = React.useState(true);
//   const [user, setUser] = React.useState(null);

//   // Handle user state changes
//   const onAuthStateChangedHandler = (user) => {
//     setUser(user);
//     if (initializing) {
//       setInitializing(false);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);

//     return unsubscribe;
//   }, []);

//   if (initializing) {
//     return (
//       <View >
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
// <NavigationContainer independent={true}>
// <Stack initialRouteName={user ? '(tabs)' : 'Login'}>
//   {user? (
//     <>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="pages/Home/AddPost" options={{ headerTitle: "Add Post" }} />
//       <Stack.Screen name="pages/Home/Notification" options={{ headerTitle: "Notifications" }} />
//       <Stack.Screen name="pages/Home/Chat" options={{ headerTitle: "Chat" }} />
//       <Stack.Screen name="pages/Business/MyBusiness" options={{ headerTitle: "My Business" }} />
//       <Stack.Screen name="pages/News/AddNews" options={{ headerTitle: "Add News" }} />
//       <Stack.Screen name="pages/Profile/EditProfile" options={{ headerTitle: "Edit Profile" }} />
//       <Stack.Screen name="pages/Profile/Setting" options={{ headerTitle: "Settings" }} />
//     </>
//   ) : (
//     <>
//      <Stack.Screen name="pages/Auth/Login" options={{ headerShown: false }} />
//      <Stack.Screen name="pages/Auth/Register" options={{ headerShown: false }} />
//     </>
//    )
//    }             
// </Stack>
// </NavigationContainer>
//   );
// }
