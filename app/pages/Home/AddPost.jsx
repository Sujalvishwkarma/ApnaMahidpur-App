import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db,storage } from '../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Styles = StyleSheet.create({
  Input: {
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 5,
  },
  InputField: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  ImagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  Image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  Label: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
  },
});

function AddPost() {
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = async () => {
    if (caption.trim() === '' || location.trim() === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    if (!image) {
      Alert.alert('Please pick an image');
      return;
    }

    try {
      // Upload image to Firebase Storage
      // const response = await fetch(image);
      // const blob = await response.blob();
      // const imageName = new Date().getTime().toString();
      // const storageRef = storage().ref().child(`images/${imageName}`);
      // await storageRef.put(blob);

      // // Get image URL from Firebase Storage
      // const imageURL = await storageRef.getDownloadURL();


      const response = await fetch(image);
      const blob = await response.blob();
      const imageName = new Date().getTime().toString();
      const storageRef = ref(storage, `images/${imageName}`);
      await uploadBytes(storageRef, blob);

      // Get image URL from Firebase Storage
      const imageURL = await getDownloadURL(storageRef);



      // Add post data to Firestore
      await addDoc(collection(db, 'Posts'), {
        caption,
        Location :location,
        imageURL: imageURL,
        timestamp: Timestamp.now(),
        userName: "anonymous",
        likes: 20,
        comments: []
      });

      Alert.alert('Post added successfully!');
      setCaption('');
      setLocation('');
      setImage(null);
    } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Error adding post, please try again.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={Styles.Image} />
        ) : (
          <View style={Styles.ImagePlaceholder}>
            <Text>Pick an image</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={Styles.InputField}>
        <Text style={Styles.Label}>Caption</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Caption"
          value={caption}
          onChangeText={setCaption}
        />
      </View>
      <View style={Styles.InputField}>
        <Text style={Styles.Label}>Location</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'brown',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={handlePost}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddPost;
