import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import Input from "../../components/Input";
import { initialValues } from "../../utils/initialValues";
import { checkoutFormSchema } from "../../utils/schemas";
import styles from "./styles";

const Checkout = () => {
  async function handleFormSubmit(values) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <Text>Checkout</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutFormSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <View>
            <Input id="cardName" name="cardName" placeholder="Nome do cartão" />
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

            <Button onPress={handleSubmit} title="Finalizar compra" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Checkout;
