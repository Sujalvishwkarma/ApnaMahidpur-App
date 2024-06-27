import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  TouchableNativeFeedback,
  ActivityIndicator,
  Text,
} from "react-native";
import { Post } from "../components/Post";
import Icon from "react-native-vector-icons/Ionicons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigation } from "expo-router";

function Home() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Posts"));
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  const renderPost = ({ item }) => (
    <Post
      key={item.id}
      userName={item.userName}
      location={item.Location}
      likes={item.likes}
      image={item.imageURL}
      caption={item.caption}
    />
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center h-screen">
        <ActivityIndicator size="large" color="black" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ position: "relative", flex: 1, paddingHorizontal: 5 }}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["black", "yellow"]}
            tintColor="red"
            title="Loading..."
            titleColor="#00ff00"
            progressBackgroundColor="white"
          />
        }
      />
      <View className="absolute right-5 rounded-2xl bottom-5 bg-white shadow-xl shadow-black overflow-hidden">
        <TouchableNativeFeedback onPress={() => navigation.navigate("pages/Home/AddPost")}>
          <View className="h-16 w-16 flex flex-col items-center justify-center">
            <Icon name="add-outline" size={30} color={"grey"} />
            <Text style={{ fontSize: 8 }}>Add Post</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

export default Home;
