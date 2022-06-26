import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const Input = ({
  onChangeText,
  value,
  inputAccessoryViewID,
  placeholder,
  ...props
}) => {
  return (
    <TextInput
      inputAccessoryViewID={inputAccessoryViewID}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={styles.input}
      {...props}
    />
  );
};

export default Input;
