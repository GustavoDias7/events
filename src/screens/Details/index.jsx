import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import Divider from "../../components/Divider";
import { formatDate } from "../../utils/date";
import styles from "./styles";

const Details = ({ route, navigation }) => {
  const [details] = useState(() => route.params.result);

  function handlePress() {
    navigation.navigate("Checkout", { details });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: details.image }} />
      </View>
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.text}>{details.description}</Text>
      <Divider />
      <Text style={styles.text}>
        <Text style={styles.bold}>Data:</Text>{" "}
        {formatDate(details.date, "dd 'de' MMMM 'de' yyyy")}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Tipo:</Text> {details.type}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Local:</Text> {details.local}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Ingressos:</Text> {details.ticket}
      </Text>
      <Divider />
      <Button onPress={handlePress} title="Comprar agora" />
    </View>
  );
};

export default Details;
