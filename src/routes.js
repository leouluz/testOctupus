import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from './pages/Home'
import Search from './pages/Search'
import MapScreen from './pages/Map'

function Tabs() {
  return (
    <Tab.Navigator
      headerMode={false}
      tabBarOptions={{
        labelStyle: { fontSize: 20 },
        style: { justifyContent: 'center', alignItems: 'center'}
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}