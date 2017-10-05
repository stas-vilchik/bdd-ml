{
  var selector = ".inner-content h2, .inner-content h3, .inner-content h4";
  var elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; i++) {
    var textMethod = document.body.textContent ? "textContent" : "innerText";
    var roughText = elements[i][textMethod];
    var urlFriendlyText = roughText
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(
        /[^A-Za-z0-9\-_.\p{Cyrillic}\p{Hangul}\p{Hiragana}\p{Katakana}\p{Han}]/g,
        ""
      );
    var anchor = document.createElement("a");
    anchor.className = "anchor";
    anchor.name = urlFriendlyText;
    elements[i].insertBefore(anchor, elements[i].firstChild);
    var hashLink = document.createElement("a");
    var icon = document.createTextNode("#");
    hashLink.appendChild(icon);
    hashLink.className = "hash-link";
    hashLink.href = "#" + urlFriendlyText;
    elements[i].appendChild(hashLink);
  }
}
