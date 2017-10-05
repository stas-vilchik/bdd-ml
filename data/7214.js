{
  ("use strict");

  if (!window.performance) {
    var start = Date.now();
    window.performance = {
      now: function() {
        return Date.now() - start;
      }
    };
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
      var nativeRaf =
        window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return nativeRaf
        ? function(callback) {
            return nativeRaf(function() {
              callback(performance.now());
            });
          }
        : function(callback) {
            return window.setTimeout(callback, 1e3 / 60);
          };
    })();
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (function() {
      return (
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        function(id) {
          clearTimeout(id);
        }
      );
    })();
  }

  var elementDeclarations = [];

  var polymerStub = function(name, dictionary) {
    if (typeof name !== "string" && arguments.length === 1) {
      Array.prototype.push.call(arguments, document._currentScript);
    }

    elementDeclarations.push(arguments);
  };

  window.Polymer = polymerStub;

  scope.consumeDeclarations = function(callback) {
    scope.consumeDeclarations = function() {
      throw "Possible attempt to load Polymer twice";
    };

    if (callback) {
      callback(elementDeclarations);
    }

    elementDeclarations = null;
  };

  function installPolymerWarning() {
    if (window.Polymer === polymerStub) {
      window.Polymer = function() {
        throw new Error(
          "You tried to use polymer without loading it first. To " +
            'load polymer, <link rel="import" href="' +
            'components/polymer/polymer.html">'
        );
      };
    }
  }

  if (HTMLImports.useNative) {
    installPolymerWarning();
  } else {
    addEventListener("DOMContentLoaded", installPolymerWarning);
  }
}
