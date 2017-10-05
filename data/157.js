{
  function n(e) {
    return (
      !!e.constructor &&
      "function" == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    );
  }

  function r(e) {
    return (
      "function" == typeof e.readFloatLE &&
      "function" == typeof e.slice &&
      n(e.slice(0, 0))
    );
  } /*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
    * @license  MIT
    */

  e.exports = function(e) {
    return null != e && (n(e) || r(e) || !!e._isBuffer);
  };
}
