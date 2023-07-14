import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
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

const Uplaod = () => {
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

        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../assets/download.png")}
        className="rounded-md 
          h-[400px] w-[400px] mt-16
          "
      />
      <Text
        style={{
          fontFamily: "Urbanist_900Black",
          fontSize: 25,
          marginTop: 20,
        }}
      >
        To Uplaod Notes
      </Text>
      <Text style={{ fontFamily: "Urbanist_500Medium", fontSize: 15 }}>
        Submit your notes on this Form
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://forms.gle/1SxijM1sczT9smLM6")}
      >
        <Text
          style={{
            fontFamily: "Urbanist_800ExtraBold",
            padding: 5,
            paddingHorizontal: 10,
            fontSize: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
            marginTop: 10,
          }}
        >
          Google Form
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Uplaod;
