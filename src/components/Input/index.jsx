import { useField } from "formik";
import React from "react";
import { TextInput, View } from "react-native";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles";

const Input = ({ name, id, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.row}>
      <TextInput
        name={name}
        id={id}
        inputAccessoryViewID={id}
        value={field.value}
        onChangeText={helpers.setValue}
        placeholder={placeholder}
        style={styles.input}
        {...props}
      />
      <ErrorMessage error={meta.error} touched={meta.touched} />
    </View>
  );
};

export default Input;
