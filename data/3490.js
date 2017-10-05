{
  if (lang && hljs.getLanguage(lang)) {
    try {
      const value = replaceDelimiters(hljs.highlight(lang, str, true).value);
      return `<pre data-lang="${lang}"><code class="language-${lang}">${value}</code></pre>`;
    } catch (err) {}
  }

  return "";
}
