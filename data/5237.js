{
  return `
          module.exports = {
            filename: ${filename},
            rawFirstLine: ${content.split("\n")[0]},
          };
        `;
}
