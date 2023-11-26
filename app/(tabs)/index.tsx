import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/bookings"}>Bookings</Link>
      <Link href={"/listing/1337"}>Listing details</Link>
    </View>
  );
};

export default App;
