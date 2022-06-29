import * as yup from "yup";
import { testIsMature, testIsValidDate, testNameIsValid } from "./yup.tests";

export const checkoutFormSchema = yup.object().shape({
  cardName: yup
    .string()
    .required("Insira o nome no cartão")
    .test("cardNameValidation", "Nome inválido", testNameIsValid),
  cardNumber: yup
    .string()
    .required("Insira o número do cartão")
    .min(13, "Insira o número do cartão válido"),
  mature: yup
    .string()
    .required("Insira uma data")
    .test("matureValidation", "Insira a data válida", testIsValidDate)
    .test("matureValidation", "Cartão sem validade", testIsMature),
  cvv: yup
    .string()
    .required("Insira o código de segurança")
    .length(3, "Digite um código com 3 dígitos"),
});
