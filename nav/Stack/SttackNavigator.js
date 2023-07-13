import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import Home from "../../screens/Home";

import { Easing } from "react-native";
import Semester from "../../screens/Semester";
import Subject from "../../screens/Subject";
import NotesCategory from "../../screens/NotesCategory";
import NotesDetail from "../../screens/NotesDetail";

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

function HomeStack() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // this adds the shadow to the header
      }}
    >
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen
        options={{
          title: "Notable",
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "Urbanist_900Black",
          },
        }}
        name="Semester"
        component={Semester}
      />
      <Stack.Screen
        options={{
          title: "Notable",
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "Urbanist_900Black",
          },
        }}
        name="Subject"
        component={Subject}
      />
      <Stack.Screen
        options={{
          title: "Notable",
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "Urbanist_900Black",
          },
        }}
        name="NotesCategory"
        component={NotesCategory}
      />
      <Stack.Screen
        options={{
          title: "Notable",
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "Urbanist_900Black",
          },
        }}
        name="NotesDetail"
        component={NotesDetail}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
