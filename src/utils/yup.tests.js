import { isValid } from "date-fns";
import { parseStringToDate } from "./date";
import { removeAllNonNumericChars, replaceAllWhitespaces } from "./strings";

export function testCpfIsValid(value) {
  const noWhiteSpace = replaceAllWhitespaces(value);
  const numbers = removeAllNonNumericChars(noWhiteSpace);

  if (numbers.length === 11) return true;
  else return false;
}

export function testNameIsValid(value = "") {
  // valid => xxx xxx
  const splittedName = value.trim().split(" ");
  let isValidName = true;

  const hasTwoOrMoreNams = splittedName.length >= 2;

  if (hasTwoOrMoreNams) {
    splittedName.forEach((eachName) => {
      if (eachName.length < 3) {
        isValidName = false;
      }
    });
  } else {
    isValidName = false;
  }

  return isValidName;
}

export function testIsValidDate(value) {
  const date = parseStringToDate(value, "MM/yyyy");
  return isValid(date);
}

export function testIsMature(value) {
  let isValidDate = false;

  const date = parseStringToDate(value, "MM/yyyy");
  const now = new Date();

  if (isValid(date)) {
    if (
      date.getMonth() >= now.getMonth() &&
      date.getFullYear() >= now.getFullYear()
    )
      isValidDate = true;
  }

  return isValidDate;
}

export function testTotalProduct(value) {
  const number = Number(value);
  return number > 0;
}

export function testCardNumberIsValid(value) {}
