



import React from "react";
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
} from "@react-navigation/stack";

import Home from '../../screens/Home';
import Setting from "../../screens/Setting";

import { Easing } from "react-native";
import Profile from "../../screens/Profile";



const Stack = createStackNavigator();


const config = {
    animation: "friction",
    config: {
        stiffness: 800,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const closeConfig = {
    animation: "friction",
    config: {
        duration: 200,
        easing: Easing.linear,
    },
};

function HomeStack (){

    return(
        <Stack.Navigator
    
        screenOptions={{
          headerShown:false,
          
            transitionSpec: {
                open: config,
                close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // this adds the shadow to the header
        }}
    >

<Stack.Screen
                
                name="HomeStack"
                component={Home}
            />
<Stack.Screen
                options={{
                headerShown:true
                }}
                name="Setting"
                component={Setting}
            />
<Stack.Screen
                options={{
                headerShown:true
                }}
                name="Profile"
                component={Profile}
            />


    </Stack.Navigator>
    )


}

export default HomeStack