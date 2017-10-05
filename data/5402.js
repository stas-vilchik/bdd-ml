{
  if (typeof language == "undefined") {
    language = "en";
  }

  if (rawContent && rawContent.indexOf(TABLE_OF_CONTENTS_TOKEN) !== -1) {
    rawContent = insertTableOfContents(rawContent);
  }

  return [
    "/**",
    " * @generated",
    " */",
    'var React = require("React");',
    'var Layout = require("' + layout + '");',
    rawContent && "var content = " + backtickify(rawContent) + ";",
    "var Post = React.createClass({",
    rawContent && "  statics: { content: content },",
    "  render: function() {",
    "    return (",
    "      <Layout metadata={" +
      JSON.stringify(metadata) +
      '} language="' +
      language +
      '">',
    rawContent && "        {content}",
    "      </Layout>",
    "    );",
    "  }",
    "});",
    "module.exports = Post;"
  ]
    .filter(e => e)
    .join("\n");
}
