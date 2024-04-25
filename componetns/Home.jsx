import { View, Text, StatusBar, Platform, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Theme } from '../theme/Index'

import {MagnifyingGlassIcon as MagniFyIcon} from "react-native-heroicons/outline"
// const ios = Platform.OS === 'ios';

const Home = () => {
  return (
   <View className="flex-1 relative">
    <StatusBar style="light"/>
    <Image blurRadius={70} source={require('../assets/images/bg.png')}
    className="absolute h-full w-full"/>
    <SafeAreaView className="flex flex-1">
      <View style={{height:'7%'}} className="mx-4 relative z-50">
        <View style={{backgroundColor:Theme.bgWhite(0.2)}} className="flex-row justify-end items-center rounded-full">
          <TextInput
          placeholder='Search city'
          placeholderTextColor={'lightgray'}
          className="pl-6 h-10 flex-1 text-base text-white"
          />
          <TouchableOpacity
          style={{backgroundColor:Theme.bgWhite(0.3)}}
          className="rounded-full p-3 m-1"
          >
           <MagniFyIcon size={25} color="white"/>

          </TouchableOpacity>
          

        </View>

      </View>

    </SafeAreaView>
   </View>
  )
}

export default Home