import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import LoadingScreen from "./Loading";

const ProgramName = ({ route }) => {
  const { Url } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading ? (
        <LoadingScreen /> // Render loading screen while WebView is loading
      ) : null}

      <WebView
        style={{ flex: 1, width: "100%", opacity: isLoading ? 0 : 1 }}
        source={{ uri: Url }}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

export default ProgramName;
