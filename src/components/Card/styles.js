import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  card: {
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  bold: {
    fontWeight: "700",
  },
  imageWrapper: {
    position: "relative",
    paddingTop: "56.25%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  description: {
    padding: 16,
  },
});

export default styles;
