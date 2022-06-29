export function replaceAllWhitespaces(str = "") {
  return str.replace(/\s+/g, "");
}

export function removeAllNonNumericChars(str = "") {
  return str.replace(/\D/g, "");
}
