export function getButtonConfig(start, buttons) {
  const { text, toggleText, styleClassOne, styleClassTwo } = buttons;
  if (start) {
    return { text: toggleText, style: styleClassTwo };
  } else {
    return { text, style: styleClassOne };
  }
}

export function isDisable(start, buttonText) {
  if (!start && buttonText === "Split") {
    return true;
  }
  if (start && buttonText === "Reset") {
    return true;
  }
  return false;
}
