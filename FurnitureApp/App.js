
import React, { Component } from 'react'
import { Text, View,StyleSheet,style,Image,TouchableOpacity,onPress } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Product" component={Product} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
