import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import events from "../../mocks/events";
import Input from "../Input";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [resultSearch, setEventResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const hasResult = resultSearch.length > 0;
  const hasResultError = search.length > 0 && resultSearch.length === 0;

  function handleChange(text) {
    setSearch(text);
  }

  function handlePress(result) {
    navigation.navigate("Details", { result });
  }

  function openResults() {
    setShowResults(true);
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
    <View style={styles.search}>
      <Input
        inputAccessoryViewID="asdadasdas"
        onChangeText={handleChange}
        value={search}
        placeholder="Pesquise"
        onFocus={openResults}
        // onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <>
          {hasResult && (
            <View style={styles.resultWrapper}>
              {resultSearch.map((result) => {
                return (
                  <View style={styles.result} key={result.title}>
                    <Text
                      style={styles.resultText}
                      onPress={() => handlePress(result)}
                    >
                      {result.title}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}
          {hasResultError && (
            <View style={styles.resultWrapper}>
              <View style={styles.result}>
                <Text style={styles.resultText}>
                  O evento "{search}" não foi encontrado.
                </Text>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Search;
