import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNav from '../Drawer/DrawerNav';
import Setting from '../../screens/Setting';
import HomeStack from '../Stack/SttackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
   <Tab.Navigator
   
   screenOptions={{
    tabBarStyle: {
      backgroundColor: '#471598',
      height: 60,
     
    },
    tabBarInactiveTintColor:"#1F1047",
    tabBarActiveTintColor:"white"
   }}

   >
    <Tab.Screen name="Home" component={DrawerNav}
    
    options={{
        headerShown:false,
        tabBarShowLabel:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size+10}
              />
            ),}}
    
    />
    <Tab.Screen name="Settd" component={Setting}
    
    options={{
        tabBarShowLabel:false,
       headerShown:false,
       
       
   
       
       
tabBarIcon: ({color, size}) => (
<MaterialCommunityIcons
 name="bookshelf"
 color={color}
 size={size +10}
/>
),}}
    
    />
   </Tab.Navigator>
  )
}

export default BottomNav