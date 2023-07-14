import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constant";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import FontAwesome from "react-native-vector-icons/MaterialIcons";
import { urlFor } from "../Sanity/Sanity";

const numColumns = 2;

const Comuni = ({ route, navigation }) => {
  const { PostCom, Post } = route.params;

  const countContributionsById = () => {
    const countMap = {};
    Post.forEach((item) => {
      const id = item.community ? item.community._id : null;
      if (id) {
        if (countMap[id]) {
          countMap[id]++;
        } else {
          countMap[id] = 1;
        }
      }
    });
    return countMap;
  };

  // Get the contribution count map
  const contributionCountMap = countContributionsById();

  const [columnWidth, setColumnWidth] = useState(0);

  useEffect(() => {
    setColumnWidth(SIZES.width / numColumns);
  }, []);

  const sortedData = PostCom.sort(
    (a, b) => contributionCountMap[b._id] - contributionCountMap[a._id]
  );

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
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        width: SIZES.width,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={sortedData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const slicedTitle =
              item.name.length > 13
                ? item.name.slice(0, 10) + "..."
                : item.name;
            const isTopContributor =
              contributionCountMap[item._id] > 0 &&
              Object.values(contributionCountMap)
                .sort((a, b) => b - a)
                .indexOf(contributionCountMap[item._id]) < 10;

            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("CommPerson", {
                    name: item.name,
                    description: item.description,
                    profileURL: item.profileURL,
                    id: item._id,
                    imageUri: urlFor(item.image).url(),
                    colllege: item.colllege,
                    sem: item.sem,
                  })
                }
              >
                <View
                  style={{
                    width: columnWidth - 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 300,
                      elevation: 3,
                      width: SIZES.width / 2 - 20,
                      marginVertical: 6,
                      paddingVertical: 10,
                    }}
                    className=" rounded-xl bg-white  flex  items-center py-5    px-4"
                  >
                    <View className=" flex flex-col items-center  ">
                      <Image
                        style={{ aspectRatio: 3 / 4 }}
                        source={{ uri: urlFor(item.image).url() }}
                        className=" w-[140px] rounded-xl "
                        resizeMode="cover"
                      />
                      <Text
                        style={{
                          fontFamily: "Urbanist_700Bold",
                          fontSize: 20,
                          marginTop: 2,
                        }}
                      >
                        {slicedTitle}
                      </Text>
                      {isTopContributor && (
                        <View className="flex justify-center flex-row items-center space-x-1">
                          <Text
                            style={{
                              fontFamily: "Urbanist_500Medium",
                              fontSize: 12,
                              marginTop: 2,
                            }}
                          >
                            Top Contributor
                          </Text>
                          <FontAwesome
                            name="verified"
                            size={20}
                            color="#007fff"
                          />
                        </View>
                      )}
                      <Text
                        style={{
                          fontFamily: "Urbanist_500Medium",
                          fontSize: 12,
                          marginTop: 2,
                        }}
                      >
                        {item.colllege} | {item.sem}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Urbanist_500Medium",
                          fontSize: 12,
                          marginTop: 2,
                        }}
                      >
                        Contributions: {contributionCountMap[item._id]}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Comuni;
