{
  babelHelpers.inherits(Connection, _EventEmitter);

  function Connection(endpoint, joinKey, joinData, roomId) {
    var _this;

    babelHelpers.classCallCheck(this, Connection);
    _this = babelHelpers.possibleConstructorReturn(
      this,
      (Connection.__proto__ || Object.getPrototypeOf(Connection)).call(this)
    );
    _this.isConnected = false;
    _this.roomId = roomId;
    return _this;
  }

  babelHelpers.createClass(Connection, [
    {
      key: "send",
      value: function send(message) {
        this.sock.write(_binarySerializer.default.serializeMessage(message));
      }
    },
    {
      key: "disconnect",
      value: function disconnect() {
        this.sock.close();
      }
    }
  ]);
  return Connection;
}
