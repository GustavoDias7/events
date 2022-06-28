import React from "react";
import { Text, View } from "react-native";
import Search from "../../components/Search";
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Busque e compre ingressos para eventos de empresas e universidades.
      </Text>
      <Search navigation={navigation} />
    </View>
  );
};

export default Home;
