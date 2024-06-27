import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { SettingButton } from '../../components/utils';

export default function Setting() {
  const router = useRouter();
  return (

    <ScrollView className="px-5 py-3">
      <TouchableHighlight onPress={router.push('pages/Profile/EditProfile')} className="border border-slate-400 rounded-2xl bg-white p-2">
        <View className="flex flex-row gap-2">
          <Image className="w-14 h-14 rounded-full" source={require('../../../assets/images/user.png')} />
          <View className="justify-center px-2 flex-1">
            <Text style={{ fontSize: 12 }} className="font-bold">Sujal Vishwkarma</Text>
            <Text style={{ fontSize: 10 }} className="text-slate-600">ssujal497@gmail.com</Text>
          </View>
        </View>
      </TouchableHighlight>


      <View className="p-3 border border-slate-400 bg-white mt-1 rounded-2xl">
        <Text className="font-bold my-1">General</Text>
        <View>
          <SettingButton title="Edit Profile" icon="person-circle-outline" />
          <SettingButton title="Change Password" icon="lock-closed-outline" />
          <SettingButton title="Notification" icon="notifications-outline" />
          <SettingButton title="Security" icon="shield-half-outline" />
          <SettingButton title="Language" icon="globe-outline" />
        </View>
      </View>

      <View className="p-3 border border-slate-400 bg-white mt-1 rounded-2xl">
        <Text className="font-bold my-1">Prefrences</Text>
        <View>
          <SettingButton title="Legal and Policies" icon="document-text-outline" />
          <SettingButton title="Help and Support" icon="help-circle-outline" />
          <SettingButton title="Logout" icon="log-out-outline" type="logout" />
        </View>
      </View>


    </ScrollView>
  )
}