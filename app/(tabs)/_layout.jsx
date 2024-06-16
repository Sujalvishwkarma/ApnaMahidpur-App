import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { TouchableOpacity, TouchableHighlight, Image } from "react-native";
import { useRouter } from "expo-router";



export default function _Layout() {
  function LogoTitle() {
    return (
      <TouchableHighlight>
        <Image
          style={{ height: 50, width: 100 }}
          source={require("../../assets/images/apnamahidpur.png")}
          />
      </TouchableHighlight>
    );
  }
  
  const HeaderButton = ({ iconname, color = "black", size = 25, onPress }) => (
    <TouchableOpacity
    className="p-2 bg-white border border-slate-200 mx-3 rounded-full shadow-lg shadow-black"
    onPress={onPress}
    >
      <Icon name={iconname} size={size} color={color} />
    </TouchableOpacity>
  );
  
  const router = useRouter()

  return (
    <Tabs
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Business":
              iconName = focused ? "business" : "business-outline";
              break;
            case "News":
              iconName = focused ? "newspaper" : "newspaper-outline";

              break;
            case "Property":
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarIconStyle: {
          marginBottom: 10,
          paddingHorizontal: 10,
          height: 40,
          width: 40,
        },
        tabBarItemStyle: {
          borderRadius: 50,
          margin: 5,
        },
        tabBarActiveTintColor: "brown",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 5,
          shadowOpacity: 0.1,
          shadowRadius: 10,
          borderRadius: 20,
          marginBottom: 15,
          marginHorizontal: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 8,
          bottom: 8,
        },
        headerTitle: () => <LogoTitle />,
      })}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerLeft: () => (
            <HeaderButton
            iconname="notifications-outline"
            size={25}
            onPress={() => router.push('pages/Home/Notification')}
            />
          ),
          headerRight: () => (
            <HeaderButton
              iconname="chatbubble-outline"
              size={25}
              onPress={() => router.push('pages/Home/Chat')}
            />
          ),
        }}
      />
      <Tabs.Screen name="Business"
       options={{
        headerLeft: () => (
          <HeaderButton
          iconname="notifications-outline"
          size={25}
          onPress={() => router.push('pages/Home/Notification')}
          />
        ),
        headerRight: () => (
          <HeaderButton
            iconname="bag-outline"
            size={25}
            onPress={() => router.push('pages/Business/MyBusiness')}
          />
        ),
       }}/>
      <Tabs.Screen name="News" 
       options={{
        headerLeft: () => (
          <HeaderButton
          iconname="notifications-outline"
          size={25}
          onPress={() => router.push('pages/Home/Notification')}
          />
        ),
        headerRight: () => (
          <HeaderButton
            iconname="document-outline"
            size={25}
            onPress={() => router.push('pages/Business/MyBusiness')}
          />
        ),
       }}/>
      <Tabs.Screen name="Property"
         options={{
          headerLeft: () => (
            <HeaderButton
            iconname="notifications-outline"
            size={25}
            onPress={() => router.push('pages/Home/Notification')}
            />
          ),
          headerRight: () => (
            <HeaderButton
              iconname="document-outline"
              size={25}
              onPress={() => router.push('pages/Business/MyBusiness')}
            />
          ),}} 
          />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: true,
          headerLeft: () => (
            <HeaderButton
              iconname="menu-outline"
              size={25}
              onPress={() => alert("Notifications pressed!")}
            />
          ),
          headerRight: () => (
            <HeaderButton
              iconname="settings-outline"
              size={25}
              onPress={() => router.push('pages/Profile/Setting')}
            />
          ),
        }}
      />
    </Tabs>
  );
}
