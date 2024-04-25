import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './componetns/Home';
import { Screen } from 'react-native-screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='Screen' component={Screen}/>
</Stack.Navigator>
   </NavigationContainer>
  )
}

export default App