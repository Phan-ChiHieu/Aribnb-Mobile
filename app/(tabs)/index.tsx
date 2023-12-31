import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const App = () => {
  const [category, setCategory] = useState("Tint homes");
  const items = useMemo(() => listingsData as any, []);
  const onDataChanged = (category: string) => {
    // console.log("CHANGED__", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings category={category} listings={items} />
    </View>
  );
};

export default App;
