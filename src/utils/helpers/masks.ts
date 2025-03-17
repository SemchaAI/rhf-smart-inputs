export function applyMask(value: string, mask: string): string {
  let maskedValue = "";
  let valueIndex = 0;
  let i = 0;
  const valueLength = value.length;
  let hasPlaceholderData = false;

  while (i < mask.length) {
    const maskChar = mask[i];
    if (maskChar === "{") {
      // Extract fixed/static part inside `{...}`
      let fixedPart = "";
      i++; // Skip '{'
      while (i < mask.length && mask[i] !== "}") {
        fixedPart += mask[i];
        i++;
      }
      i++; // Skip '}'
      if (value.substring(valueIndex, fixedPart.length + 1) === fixedPart) {
        valueIndex += fixedPart.length;
      }
      maskedValue += fixedPart; // Append static part
      continue;
    }

    if (maskChar === "9") {
      // Expect a digit
      if (valueIndex < valueLength && /\d/.test(value[valueIndex])) {
        maskedValue += value[valueIndex++];
        hasPlaceholderData = true;
      } else {
        break; // Stop processing if value is exhausted
      }
    } else if (maskChar === "a") {
      if (valueIndex < valueLength && /[A-Za-z]/.test(value[valueIndex])) {
        maskedValue += value[valueIndex++];
        hasPlaceholderData = true;
      } else {
        break; // Stop processing if the next character isn't a letter
      }
    } else {
      // Handle static characters
      if (valueIndex < valueLength && value[valueIndex] === maskChar) {
        valueIndex++; // Skip over already existing static characters
      }
      maskedValue += maskChar;
    }

    i++; // Move to the next mask character
  }

  if (!hasPlaceholderData) {
    return "";
  }
  return maskedValue;
}

export function removeMask(value: string, mask: string): string {
  let clearValue = "";
  let shift = 0;

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];
    if (char === "{" || char === "}") shift += 1;
    if (!value[i - shift]) return clearValue;
    if (char === "a" || char === "9") {
      clearValue += value[i - shift];
    }
  }
  return clearValue;
}
