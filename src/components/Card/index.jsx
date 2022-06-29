import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { formatDate } from "../../utils/date";
import styles from "./styles";

const Card = (props) => {
  const { title, local, date, image, navigation } = props;

  function handlePress() {
    navigation.navigate("Details", { result: props });
  }

  return (
    <View style={styles.card}>
      <Pressable onPress={handlePress}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </Pressable>
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{local}</Text>
        <Text style={styles.text}>
          {formatDate(date, "dd 'de' MMMM 'de' yyyy")}
        </Text>
      </View>
    </View>
  );
};

export default Card;
