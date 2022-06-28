import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Card from "../../components/Card";
import Search from "../../components/Search";
import events from "../../mocks/events";
import styles from "./styles";

const Home = ({ navigation }) => {
  const [moreEvents, setMoreEvents] = useState(2);

  function handleMoreEvents() {
    setMoreEvents((state) => state + 2);
  }

  function handleLessEvents() {
    setMoreEvents(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Busque e compre ingressos para eventos de empresas e universidades.
      </Text>
      <Search navigation={navigation} />
      <Text style={styles.title}>Eventos disponíveis:</Text>
      {events.slice(0, moreEvents).map((event) => {
        return <Card key={event.id} navigation={navigation} {...event} />;
      })}
      <View style={styles.quantEvents}>
        {moreEvents < events.length ? (
          <Text onPress={handleMoreEvents}>Mais Eventos</Text>
        ) : (
          <Text onPress={handleLessEvents}>Menos Eventos</Text>
        )}
      </View>
    </View>
  );
};

export default Home;
