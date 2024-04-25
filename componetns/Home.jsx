import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'


const ios = Platform.OS === 'ios';

const Home = () => {
  return (
    <View >
      <SafeAreaView >
        <StatusBar />
      </SafeAreaView>
      {/* <View style={styles.icons}>

      </View> */}
    </View>
  )
}

export default Home