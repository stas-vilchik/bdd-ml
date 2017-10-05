{
  languages.filter(lang => lang.enabled).map(lang => {
    const folder = lang.tag;
    const indexTemplate =
      "/* This is a generated file */\n" +
      "const React = require('React');\n" +
      "const JestIndex = require('JestIndex');\n" +
      "const index = React.createClass({\n" +
      "  render() {\n" +
      "    return <JestIndex language={\n" +
      "'" +
      folder +
      "'" +
      "} />;\n" +
      "  },\n" +
      "});\n" +
      "module.exports = index;\n";
    const helpTemplate =
      "/* This is a generated file */\n" +
      "const React = require('React');\n" +
      "const JestHelp = require('JestHelp');\n" +
      "const help = React.createClass({\n" +
      "  render() {\n" +
      "    return <JestHelp language={\n" +
      "'" +
      folder +
      "'" +
      "} />;\n" +
      "  },\n" +
      "});\n" +
      "module.exports = help;\n";
    const usersTemplate =
      "/* This is a generated file */\n" +
      "const React = require('React');\n" +
      "const JestUsers = require('JestUsers');\n" +
      "const users = React.createClass({\n" +
      "  render() {\n" +
      "    return <JestUsers language={\n" +
      "'" +
      folder +
      "'" +
      "} />;\n" +
      "    },\n" +
      "});\n" +
      "module.exports = users;\n";
    const supportTemplate =
      "/* This is a generated file */\n" +
      "const React = require('React');\n" +
      "const RedirectLayout = require('RedirectLayout');\n" +
      "class Support extends React.Component {\n" +
      "  render() {\n" +
      "    const metadata = {\n" +
      "      destinationUrl: 'help.html',\n" +
      "      id: 'support',\n" +
      "      layout: 'redirect',\n" +
      "      permalink: '/jest/support.html',\n" +
      "      source: 'support.md',\n" +
      "    };\n" +
      "    return <RedirectLayout metadata={metadata} />;\n" +
      "  }\n" +
      "}\n" +
      "module.exports = Support;\n";
    writeFileAndCreateFolder("src/jest/" + folder + "/index.js", indexTemplate);
    writeFileAndCreateFolder("src/jest/" + folder + "/help.js", helpTemplate);
    writeFileAndCreateFolder("src/jest/" + folder + "/users.js", usersTemplate);
    writeFileAndCreateFolder(
      "src/jest/" + folder + "/support.js",
      supportTemplate
    );
  });
  const indexTemplate =
    "/* This is a generated file */\n" +
    "const React = require('React');\n" +
    "const JestIndex = require('JestIndex');\n" +
    "const index = React.createClass({\n" +
    "  render() {\n" +
    "    return <JestIndex language={'en'} />;\n" +
    "  },\n" +
    "});\n" +
    "module.exports = index;\n";
  const helpTemplate =
    "/* This is a generated file */\n" +
    "const React = require('React');\n" +
    "const JestHelp = require('JestHelp');\n" +
    "const help = React.createClass({\n" +
    "  render() {\n" +
    "    return <JestHelp language={'en'} />;\n" +
    "  },\n" +
    "});\n" +
    "module.exports = help;\n";
  const usersTemplate =
    "/* This is a generated file */\n" +
    "const React = require('React');\n" +
    "const JestUsers = require('JestUsers');\n" +
    "const users = React.createClass({\n" +
    "  render() {\n" +
    "    return <JestUsers language={'en'} />;\n" +
    "  },\n" +
    "});\n" +
    "module.exports = users;\n";
  const supportTemplate =
    "/* This is a generated file */\n" +
    "const React = require('React');\n" +
    "const RedirectLayout = require('RedirectLayout');\n" +
    "class Support extends React.Component {\n" +
    "  render() {\n" +
    "    const metadata = {\n" +
    "      destinationUrl: 'help.html',\n" +
    "      id: 'support',\n" +
    "      layout: 'redirect',\n" +
    "      permalink: '/jest/support.html',\n" +
    "      source: 'support.md',\n" +
    "    };\n" +
    "    return <RedirectLayout metadata={metadata} />;\n" +
    "  }\n" +
    "}\n" +
    "module.exports = Support;\n";
  writeFileAndCreateFolder("src/jest/index.js", indexTemplate);
  writeFileAndCreateFolder("src/jest/help.js", helpTemplate);
  writeFileAndCreateFolder("src/jest/users.js", usersTemplate);
  writeFileAndCreateFolder("src/jest/support.js", supportTemplate);
}
