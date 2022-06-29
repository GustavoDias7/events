import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Checkout from "../screens/Checkout";
import Success from "../screens/Success";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Events" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Sucesso" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainRouter;
