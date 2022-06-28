import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Details = ({ route }) => {
  const [details, setDetails] = useState(() => route.params.result);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.text}>{details.description}</Text>
      <Text style={styles.text}>Data: {details.date.toString()}</Text>
      <Text style={styles.text}>Tipo: {details.type}</Text>
      <Text style={styles.text}>Local: {details.local}</Text>
    </View>
  );
};

export default Details;
