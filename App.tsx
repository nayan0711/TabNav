import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab =createBottomTabNavigator()
const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name='Login' component={Login}/>
              <Tab.Screen name='SignUp' component={SignUp}/>
            </Tab.Navigator>
          </NavigationContainer>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default App