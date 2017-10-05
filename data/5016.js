{
  it("is possible to override the default resolver", () => {
    const cwd = process.cwd();
    const resolvedCwd = fs.realpathSync(cwd) || cwd;
    const nodePaths = process.env.NODE_PATH
      ? process.env.NODE_PATH
          .split(path.delimiter)
          .filter(Boolean)
          .map(p => path.resolve(resolvedCwd, p))
      : null;
    userResolver.mockImplementation(() => "module");
    const newPath = Resolver.findNodeModule("test", {
      basedir: "/",
      browser: true,
      extensions: ["js"],
      moduleDirectory: ["node_modules"],
      paths: ["/something"],
      resolver: require.resolve("../__mocks__/userResolver")
    });
    expect(newPath).toBe("module");
    expect(userResolver.mock.calls[0][0]).toBe("test");
    expect(userResolver.mock.calls[0][1]).toEqual({
      basedir: "/",
      browser: true,
      extensions: ["js"],
      moduleDirectory: ["node_modules"],
      paths: (nodePaths || []).concat(["/something"])
    });
  });
}
