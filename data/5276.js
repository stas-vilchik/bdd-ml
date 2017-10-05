{
  fs.writeFileSync = jest.fn();
  fs.readFileSync = jest.fn();
  fs.existsSync = jest.fn(() => true);
}
