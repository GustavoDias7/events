import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";

const Home = () => {
  const [search, setSearch] = useState("");

  function handleChange(text) {
    setSearch(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Busque e compre ingressos para eventos de empresas e universidades.
      </Text>
      <Input
        inputAccessoryViewID="asdadasdas"
        onChangeText={handleChange}
        value={search}
        placeholder="Pesquise"
      />
      <Text style={styles.title}>Eventos em destaque:</Text>
    </View>
  );
};

export default Home;
