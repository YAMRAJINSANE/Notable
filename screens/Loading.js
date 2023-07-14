import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import { useEffect } from "react";
import { useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontFamily: "Urbanist_800ExtraBold", fontSize: 50 }}>
        Notable.
      </Text>
      <Text style={{ fontFamily: "Urbanist_600SemiBold" }}>Loading</Text>

      {isLoading ? null : (
        <View className="absolute bottom-10">
          <Text style={{ fontFamily: "Urbanist_400Regular", fontSize: 14 }}>
            Check you Network Connection and Try Again.
          </Text>
        </View>
      )}
    </View>
  );
};

export default LoadingScreen;
