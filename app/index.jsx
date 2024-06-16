import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
// import * as SMS from 'expo-sms';

export default function index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     <Link href={'pages/Auth/Login'} >Go To Tabs-</Link>
    </View>
  );
}
