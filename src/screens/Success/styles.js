import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  texts: {
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  bold: {
    fontWeight: "700",
  },
  image: {
    width: 64,
    height: 64,
    marginHorizontal: "auto",
    marginBottom: 8,
  },
  button: {
    width: 160,
    marginHorizontal: "auto",
  },
});

export default styles;
