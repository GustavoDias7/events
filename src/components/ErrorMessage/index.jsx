import React from "react";
import { Text } from "react-native";
import styles from "../Input/styles";

const ErrorMessage = ({ error, touched, ...props }) => {
  if (!(error && touched)) return null;
  return (
    <Text style={styles.errorMessage} {...props}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
