import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const App = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Listings />
    </View>
  );
};

export default App;
