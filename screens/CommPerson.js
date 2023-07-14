import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import React from "react";
import { SIZES } from "../constant";
import { Linking } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const CommPerson = ({ route, navigation }) => {
  const {
    name,
    description,
    profileURL,
    id,
    imageUri,
    colllege,
    sem,
    filteredPosts,
    Condition,
  } = route.params;

  console.log("--------------------------------");
  console.log(filteredPosts);

  console.log("--------------------------------");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{
          width: SIZES.width,
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",

          padding: 10,
        }}
      >
        <Image
          style={{
            aspectRatio: 3 / 4,
          }}
          source={{ uri: imageUri }}
          className=" w-[350px] rounded-xl"
        />
        <Text
          style={{ fontFamily: "Urbanist_800ExtraBold" }}
          className="w-full text-2xl px-5 text-gray-800 mt-2 "
        >
          {name}
        </Text>
        <Text
          style={{ fontFamily: "Urbanist_800ExtraBold", fontSize: 15 }}
          className="w-full  px-5 text-gray-800 "
        >
          {colllege} | {sem}
        </Text>
        <View
          style={{
            width: SIZES.width - 50,
            marginVertical: 10,
          }}
          className="w-full px-5  h-[.5px] bg-gray-600"
        />
        <Text
          style={{
            fontFamily: "Urbanist_600SemiBold",
            fontSize: 16,
            lineHeight: 20,
          }}
          className="w-full text-gray-800 text-lg px-5  "
        >
          {description}
        </Text>

        <Pressable onPress={() => Linking.openURL(profileURL)}>
          <View
            style={{
              width: SIZES.width - 50,
            }}
            className=" w-full  flex justify-center items-center  mt-5 text-xl text-white  py-4 bg-black rounded-md mx-24 "
          >
            <Text
              className=" text-xl text-white "
              style={{ fontFamily: "Urbanist_700Bold" }}
            >
              Connect
            </Text>
          </View>
        </Pressable>
        {Condition == "true" ? (
          <>
            <Text
              style={{ fontFamily: "Urbanist_800ExtraBold" }}
              className="w-full text-lg mt-5 "
            >
              Contributions
            </Text>

            <FlatList
              data={filteredPosts}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                const publishedAt = new Date(item.uploadDate).toLocaleString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                );
                const slicedTitle =
                  item.title.length > 60
                    ? item.title.slice(0, 60) + "..."
                    : item.title;
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ProgramName", { Url: item.url })
                    }
                  >
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: "black",
                        width: "100%",
                        marginVertical: 6,
                      }}
                      className=" rounded-md flex flex-row justify-between items-center py-5  px-4"
                    >
                      <View className=" flex flex-row items-center w-full   ">
                        <SimpleLineIcons
                          name="notebook"
                          size={80}
                          color="black"
                        />

                        <View className=" flex flex-col  w-[70%] ">
                          <Text
                            className="ml-1 "
                            style={{
                              fontFamily: "Urbanist_700Bold",
                              fontSize: 18,
                            }}
                          >
                            {slicedTitle}
                          </Text>
                          <View style={{}}>
                            <Text
                              style={{
                                fontFamily: "Urbanist_700Bold",
                                fontSize: 12,
                              }}
                            >
                              • {item.subject.name}
                            </Text>

                            <View className="flex justify-between items-center flex-row">
                              <Text
                                style={{
                                  fontFamily: "Urbanist_700Bold",
                                  fontSize: 12,
                                }}
                              >
                                • {item.semester.title}
                              </Text>
                              <Text
                                style={{
                                  fontFamily: "Urbanist_700Bold",
                                  fontSize: 12,
                                }}
                              >
                                • {item.category.title}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontFamily: "Urbanist_700Bold",
                                fontSize: 12,
                              }}
                            >
                              • Upload Date {publishedAt}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CommPerson;
