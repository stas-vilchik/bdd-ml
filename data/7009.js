{
  if (!sheet) {
    sheet = document.createElement("style");
    sheet.setAttribute(SHIMMED_ATTRIBUTE, "");
    sheet[SHIMMED_ATTRIBUTE] = true;
  }

  return sheet;
}
