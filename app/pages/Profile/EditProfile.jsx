import { View, Text, Image, TextInput, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function EditProfile() {
  return (
    <ScrollView className="relative h-screen ">
      <View className="p-5 items-center">
        <View className="w-28 h-28 rounded-full overflow-hidden" >
          <Image className="h-full w-full" source={require('../../../assets/images/user.png')} />
        </View>
      </View>
      <View className="bg-white border border-slate-400 rounded-xl mx-4 p-5">

        <View className="py-2">
          <Text className="text-lg">Full Name</Text>
          <TextInput className="border rounded-md text-xl px-4 py-2" placeholder='Full Name' />
        </View>

        <View className="py-2">
          <Text className="text-lg">Date of birth</Text>
          <TextInput className="border rounded-md text-xl px-4 py-2" placeholder='Date of birth' />
        </View>

        <View className="py-2">
          <Text className="text-lg">Email</Text>
          <TextInput className="border rounded-md text-xl px-4 py-2" placeholder='Email Address' />
        </View>

        <View className="py-2">
          <Text className="text-lg">Phone</Text>
          <TextInput className="border rounded-md text-xl px-4 py-2" placeholder='Phone Number' />
        </View>

        <View className="py-2">
          <Text className="text-lg">Bio</Text>
          <TextInput className="border rounded-md text-xl px-4 py-2" placeholder='Bio' />
        </View>

        <TouchableNativeFeedback >
          <View className="p-3 mt-5 bg-slate-800 rounded-xl">
            <Text className="text-xl text-white text-center">Save Details</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    </ScrollView>
  )
}