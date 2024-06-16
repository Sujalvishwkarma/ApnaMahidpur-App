import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Business() {
  return (
    <View>
      <View className="bg-white m-3 p-3">
        <Text className="p-2 text-lg">Business</Text>
        <ScrollView scrollEnabled={true}>
        <View horizontal={true} className="p-1 flex flex-row gap-2 overflow-scroll">
          <View className="w-1/3 aspect-square overflow-hidden rounded-2xl border">
            <Image className="w-full h-full" source={require('../../assets/images/company-logo.png')} />
          </View>
          <View className="w-1/3 aspect-square overflow-hidden rounded-2xl border">
            <Image className="w-full h-full" source={require('../../assets/images/company-logo.png')} />
          </View>
          <View className="w-1/3 aspect-square overflow-hidden rounded-2xl border">
            <Image className="w-full h-full" source={require('../../assets/images/company-logo.png')} />
          </View>
          <View className="w-1/3 aspect-square overflow-hidden rounded-2xl border">
            <Image className="w-full h-full" source={require('../../assets/images/company-logo.png')} />
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}