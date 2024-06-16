import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Property() {
  const ButtonStyle = "border m-2 w-2/5 p-3 rounded-lg shadow-xl shadow-black bg-white";
  return (
    <View>
      <View className="m-2 p-4 rounded-md border bg-red-800 border-slate-300">
        <Text className="text-center text-md text-white">Apna Mahidpur Properties Hub</Text>
      </View>
      <View className="flex flex-row justify-center flex-wrap">
        <TouchableHighlight className={`${ButtonStyle}`}>
          <View>
            <Text className="text-sm">Buy Property</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className={`${ButtonStyle}`}>
          <View>
            <Text className="text-sm">Sale Property</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className={`${ButtonStyle}`}>
          <View>
            <Text className="text-sm">Rent Property</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className={`${ButtonStyle}`}>
          <View>
            <Text className="text-sm">Buy Property</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View>

      </View>
    </View>
  )
}