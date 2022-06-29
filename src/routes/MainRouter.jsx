import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Checkout from "../screens/Checkout";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Events" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
