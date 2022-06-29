import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import Input from "../../components/Input";
import { initialValues } from "../../utils/initialValues";
import { checkoutFormSchema } from "../../utils/schemas";
import styles from "./styles";

const Checkout = ({ navigation }) => {
  async function handleFormSubmit(values) {
    navigation.navigate("Sucesso");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutFormSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <View style={styles.form}>
              <Input
                id="cardName"
                name="cardName"
                placeholder="Nome do cartão"
              />
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="Número do cartão"
              />
              <Input
                id="mature"
                name="mature"
                placeholder="Data de vencimento (mm/aaaa)"
              />
              <Input id="cvv" name="cvv" placeholder="CVV (123)" />
            </View>

            <Button onPress={handleSubmit} title="Finalizar compra" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Checkout;
