import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search: {
    position: "relative",
  },
  resultWrapper: {
    position: "absolute",
    top: 56,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
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