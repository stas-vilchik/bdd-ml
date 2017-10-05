{
  config = Object.assign(config, {
    transform: [["^.+\\.js$", "passthrough-preprocessor"]]
  });
  const scriptTransformer = new ScriptTransformer(config);
  const incorrectReturnValues = [
    [undefined, "/fruits/banana.js"],
    [
      {
        a: "a"
      },
      "/fruits/kiwi.js"
    ],
    [[], "/fruits/grapefruit.js"]
  ];
  incorrectReturnValues.forEach(([returnValue, filePath]) => {
    require("passthrough-preprocessor").process.mockReturnValue(returnValue);

    expect(() => scriptTransformer.transform(filePath, {})).toThrow(
      "must return a string"
    );
  });
  const correctReturnValues = [
    ["code", "/fruits/banana.js"],
    [
      {
        code: "code"
      },
      "/fruits/kiwi.js"
    ]
  ];
  correctReturnValues.forEach(([returnValue, filePath]) => {
    require("passthrough-preprocessor").process.mockReturnValue(returnValue);

    expect(() => scriptTransformer.transform(filePath, {})).not.toThrow();
  });
}
