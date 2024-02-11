import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}


export default App;
