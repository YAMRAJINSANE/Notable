import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import client from "../Sanity/Sanity";
import LoadingScreen from "./Loading";

const Uplaod = () => {
  const [FormUrl, setFormUrl] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const UrlPromise = client.fetch(`
        *[_type == "formurl"] |
        order(_createdAt) {
         url
        
        }
      `);

      const [postData] = await Promise.all([UrlPromise]);
      console.log(postData);
      setFormUrl(postData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
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

        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {Loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Image
            source={require("../assets/download.png")}
            className="rounded-md 
          h-[400px] w-[400px] mt-16
          "
          />
          <Text
            style={{
              fontFamily: "Urbanist_900Black",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Upload Notes
          </Text>
          <Text
            style={{
              fontFamily: "Urbanist_900Black",
              fontSize: 20,
            }}
          >
            & Be a Part of Our Community.
          </Text>
          <Text style={{ fontFamily: "Urbanist_500Medium", fontSize: 15 }}>
            Submit your notes on this Form
          </Text>
          {FormUrl.map((g, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => Linking.openURL(g.url)}
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
            );
          })}
        </>
      )}
    </View>
  );
};

export default Uplaod;
