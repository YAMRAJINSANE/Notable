import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../Stack/SttackNavigator';
import Profile from '../../screens/Profile';



const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
   <Drawer.Navigator>

  <Drawer.Screen name='HomeDrawer'  component={HomeStack} />
  <Drawer.Screen name='Profile'  component={Profile} />




   </Drawer.Navigator>
  )
}

export default DrawerNav