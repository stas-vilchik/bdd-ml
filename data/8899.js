{
  decoder = decoder || document.createElement("div");
  decoder.innerHTML = html;
  return decoder.textContent;
}
