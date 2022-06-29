import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./styles";

const Success = ({ navigation }) => {
  function handlePress() {
    navigation.navigate("Events");
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/Check.png")}
      />
      <Text style={styles.title}>SUCESSO!</Text>
      <View style={styles.texts}>
        <Text>Seu pedido foi realizado com sucesso.</Text>
        <Text>Para mais informações, acesse seu e-mail.</Text>
      </View>

      <View style={styles.button}>
        <Button onPress={handlePress} title="Voltar para Home" />
      </View>
    </View>
  );
};

export default Success;
