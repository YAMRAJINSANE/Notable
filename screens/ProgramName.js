import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import LoadingScreen from "./Loading";
const ProgramName = ({ route }) => {
  const { Url } = route.params;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <WebView style={{ flex: 1, width: "100%" }} source={{ uri: Url }} />
      )}
    </View>
  );
};

export default ProgramName;
