import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Input from "../../components/Input";
import events from "../../mocks/events";
import styles from "./styles";

const Home = () => {
  const [search, setSearch] = useState("");
  const [resultSearch, setEventResult] = useState([]);
  const hasResult = resultSearch.length > 0;
  const hasResultError = search.length > 0 && resultSearch.length === 0;

  function handleChange(text) {
    setSearch(text);
  }

  useEffect(() => {
    setEventResult(() => {
      return events.filter((e) => {
        if (search.length === 0) return false;
        return e.title.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Busque e compre ingressos para eventos de empresas e universidades.
      </Text>
      <View style={styles.search}>
        <Input
          inputAccessoryViewID="asdadasdas"
          onChangeText={handleChange}
          value={search}
          placeholder="Pesquise"
        />
        {hasResult && (
          <View style={styles.resultWrapper}>
            {resultSearch.map((result) => {
              return (
                <View style={styles.result} key={result.title}>
                  <Text style={styles.resultText}>{result.title}</Text>
                </View>
              );
            })}
          </View>
        )}
        {hasResultError && (
          <View style={styles.resultWrapper}>
            <View style={styles.result}>
              <Text style={styles.resultText}>
                "{search}" não foi encontrado.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
