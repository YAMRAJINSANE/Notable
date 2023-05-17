import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import {COLORS} from "../constant"

import {
    useFonts,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';
const Home = () => {

    let [fontsLoaded] = useFonts({
       
        Roboto_900Black,
      
      });

if(!fontsLoaded){
return (
    <View
  style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }}  >
<ActivityIndicator size="small" />
    </View>
)
    }
  return (
    <View style={{
       flex:1,
       backgroundColor:COLORS.primary,
       alignItems:"center",
       justifyContent:"center",

     }}>
    <Text style={{
      justifyContent:"center",
      alignItems:"center" ,
      fontFamily:"Roboto_900Black"
     }}>
   fkdsjf
     </Text>
     </View>
  )
}

export default Home