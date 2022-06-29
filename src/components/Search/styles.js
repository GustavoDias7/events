import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search: {
    position: "relative",
    zIndex: 9,
    elevation: 9,
  },
  input: {
    paddingHorizontal: 16,
    height: 48,
    border: "2px solid #222",
    borderRadius: 8,
    marginBottom: 16,
  },
  resultWrapper: {
    position: "absolute",
    top: 56,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.3)",
  },
  result: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  resultText: {
    fontWeight: "600",
  },
});

export default styles;
