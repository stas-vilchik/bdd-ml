{
  ("use strict");

  var constructorTable = new WeakMap();
  var nativePrototypeTable = new WeakMap();
  var wrappers = Object.create(null);

  function detectEval() {
    if (typeof chrome !== "undefined" && chrome.app && chrome.app.runtime) {
      return false;
    }

    if (navigator.getDeviceStorage) {
      return false;
    }

    try {
      var f = new Function("return true;");
      return f();
    } catch (ex) {
      return false;
    }
  }

  var hasEval = detectEval();

  function assert(b) {
    if (!b) throw new Error("Assertion failed");
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  function mixin(to, from) {
    var names = getOwnPropertyNames(from);

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      defineProperty(to, name, getOwnPropertyDescriptor(from, name));
    }

    return to;
  }

  function mixinStatics(to, from) {
    var names = getOwnPropertyNames(from);

    for (var i = 0; i < names.length; i++) {
      var name = names[i];

      switch (name) {
        case "arguments":
        case "caller":
        case "length":
        case "name":
        case "prototype":
        case "toString":
          continue;
      }

      defineProperty(to, name, getOwnPropertyDescriptor(from, name));
    }

    return to;
  }

  function oneOf(object, propertyNames) {
    for (var i = 0; i < propertyNames.length; i++) {
      if (propertyNames[i] in object) return propertyNames[i];
    }
  }

  var nonEnumerableDataDescriptor = {
    value: undefined,
    configurable: true,
    enumerable: false,
    writable: true
  };

  function defineNonEnumerableDataProperty(object, name, value) {
    nonEnumerableDataDescriptor.value = value;
    defineProperty(object, name, nonEnumerableDataDescriptor);
  }

  getOwnPropertyNames(window);

  function getWrapperConstructor(node) {
    var nativePrototype = node.__proto__ || Object.getPrototypeOf(node);
    var wrapperConstructor = constructorTable.get(nativePrototype);
    if (wrapperConstructor) return wrapperConstructor;
    var parentWrapperConstructor = getWrapperConstructor(nativePrototype);
    var GeneratedWrapper = createWrapperConstructor(parentWrapperConstructor);
    registerInternal(nativePrototype, GeneratedWrapper, node);
    return GeneratedWrapper;
  }

  function addForwardingProperties(nativePrototype, wrapperPrototype) {
    installProperty(nativePrototype, wrapperPrototype, true);
  }

  function registerInstanceProperties(wrapperPrototype, instanceObject) {
    installProperty(instanceObject, wrapperPrototype, false);
  }

  var isFirefox = /Firefox/.test(navigator.userAgent);
  var dummyDescriptor = {
    get: function() {},
    set: function(v) {},
    configurable: true,
    enumerable: true
  };

  function isEventHandlerName(name) {
    return /^on[a-z]+$/.test(name);
  }

  function isIdentifierName(name) {
    return /^\w[a-zA-Z_0-9]*$/.test(name);
  }

  function getGetter(name) {
    return hasEval && isIdentifierName(name)
      ? new Function("return this.__impl4cf1e782hg__." + name)
      : function() {
          return this.__impl4cf1e782hg__[name];
        };
  }

  function getSetter(name) {
    return hasEval && isIdentifierName(name)
      ? new Function("v", "this.__impl4cf1e782hg__." + name + " = v")
      : function(v) {
          this.__impl4cf1e782hg__[name] = v;
        };
  }

  function getMethod(name) {
    return hasEval && isIdentifierName(name)
      ? new Function(
          "return this.__impl4cf1e782hg__." +
            name +
            ".apply(this.__impl4cf1e782hg__, arguments)"
        )
      : function() {
          return this.__impl4cf1e782hg__[name].apply(
            this.__impl4cf1e782hg__,
            arguments
          );
        };
  }

  function getDescriptor(source, name) {
    try {
      return Object.getOwnPropertyDescriptor(source, name);
    } catch (ex) {
      return dummyDescriptor;
    }
  }

  var isBrokenSafari = (function() {
    var descr = Object.getOwnPropertyDescriptor(Node.prototype, "nodeType");
    return descr && !descr.get && !descr.set;
  })();

  function installProperty(source, target, allowMethod, opt_blacklist) {
    var names = getOwnPropertyNames(source);

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (name === "polymerBlackList_") continue;
      if (name in target) continue;
      if (source.polymerBlackList_ && source.polymerBlackList_[name]) continue;

      if (isFirefox) {
        source.__lookupGetter__(name);
      }

      var descriptor = getDescriptor(source, name);
      var getter, setter;

      if (allowMethod && typeof descriptor.value === "function") {
        target[name] = getMethod(name);
        continue;
      }

      var isEvent = isEventHandlerName(name);
      if (isEvent) getter = scope.getEventHandlerGetter(name);
      else getter = getGetter(name);

      if (descriptor.writable || descriptor.set || isBrokenSafari) {
        if (isEvent) setter = scope.getEventHandlerSetter(name);
        else setter = getSetter(name);
      }

      defineProperty(target, name, {
        get: getter,
        set: setter,
        configurable: descriptor.configurable,
        enumerable: descriptor.enumerable
      });
    }
  }

  function register(nativeConstructor, wrapperConstructor, opt_instance) {
    var nativePrototype = nativeConstructor.prototype;
    registerInternal(nativePrototype, wrapperConstructor, opt_instance);
    mixinStatics(wrapperConstructor, nativeConstructor);
  }

  function registerInternal(nativePrototype, wrapperConstructor, opt_instance) {
    var wrapperPrototype = wrapperConstructor.prototype;
    assert(constructorTable.get(nativePrototype) === undefined);
    constructorTable.set(nativePrototype, wrapperConstructor);
    nativePrototypeTable.set(wrapperPrototype, nativePrototype);
    addForwardingProperties(nativePrototype, wrapperPrototype);
    if (opt_instance)
      registerInstanceProperties(wrapperPrototype, opt_instance);
    defineNonEnumerableDataProperty(
      wrapperPrototype,
      "constructor",
      wrapperConstructor
    );
    wrapperConstructor.prototype = wrapperPrototype;
  }

  function isWrapperFor(wrapperConstructor, nativeConstructor) {
    return (
      constructorTable.get(nativeConstructor.prototype) === wrapperConstructor
    );
  }

  function registerObject(object) {
    var nativePrototype = Object.getPrototypeOf(object);
    var superWrapperConstructor = getWrapperConstructor(nativePrototype);
    var GeneratedWrapper = createWrapperConstructor(superWrapperConstructor);
    registerInternal(nativePrototype, GeneratedWrapper, object);
    return GeneratedWrapper;
  }

  function createWrapperConstructor(superWrapperConstructor) {
    function GeneratedWrapper(node) {
      superWrapperConstructor.call(this, node);
    }

    var p = Object.create(superWrapperConstructor.prototype);
    p.constructor = GeneratedWrapper;
    GeneratedWrapper.prototype = p;
    return GeneratedWrapper;
  }

  function isWrapper(object) {
    return object && object.__impl4cf1e782hg__;
  }

  function isNative(object) {
    return !isWrapper(object);
  }

  function wrap(impl) {
    if (impl === null) return null;
    assert(isNative(impl));
    return (
      impl.__wrapper8e3dd93a60__ ||
      (impl.__wrapper8e3dd93a60__ = new (getWrapperConstructor(impl))(impl))
    );
  }

  function unwrap(wrapper) {
    if (wrapper === null) return null;
    assert(isWrapper(wrapper));
    return wrapper.__impl4cf1e782hg__;
  }

  function unsafeUnwrap(wrapper) {
    return wrapper.__impl4cf1e782hg__;
  }

  function setWrapper(impl, wrapper) {
    wrapper.__impl4cf1e782hg__ = impl;
    impl.__wrapper8e3dd93a60__ = wrapper;
  }

  function unwrapIfNeeded(object) {
    return object && isWrapper(object) ? unwrap(object) : object;
  }

  function wrapIfNeeded(object) {
    return object && !isWrapper(object) ? wrap(object) : object;
  }

  function rewrap(node, wrapper) {
    if (wrapper === null) return;
    assert(isNative(node));
    assert(wrapper === undefined || isWrapper(wrapper));
    node.__wrapper8e3dd93a60__ = wrapper;
  }

  var getterDescriptor = {
    get: undefined,
    configurable: true,
    enumerable: true
  };

  function defineGetter(constructor, name, getter) {
    getterDescriptor.get = getter;
    defineProperty(constructor.prototype, name, getterDescriptor);
  }

  function defineWrapGetter(constructor, name) {
    defineGetter(constructor, name, function() {
      return wrap(this.__impl4cf1e782hg__[name]);
    });
  }

  function forwardMethodsToWrapper(constructors, names) {
    constructors.forEach(function(constructor) {
      names.forEach(function(name) {
        constructor.prototype[name] = function() {
          var w = wrapIfNeeded(this);
          return w[name].apply(w, arguments);
        };
      });
    });
  }

  scope.assert = assert;
  scope.constructorTable = constructorTable;
  scope.defineGetter = defineGetter;
  scope.defineWrapGetter = defineWrapGetter;
  scope.forwardMethodsToWrapper = forwardMethodsToWrapper;
  scope.isWrapper = isWrapper;
  scope.isWrapperFor = isWrapperFor;
  scope.mixin = mixin;
  scope.nativePrototypeTable = nativePrototypeTable;
  scope.oneOf = oneOf;
  scope.registerObject = registerObject;
  scope.registerWrapper = register;
  scope.rewrap = rewrap;
  scope.setWrapper = setWrapper;
  scope.unsafeUnwrap = unsafeUnwrap;
  scope.unwrap = unwrap;
  scope.unwrapIfNeeded = unwrapIfNeeded;
  scope.wrap = wrap;
  scope.wrapIfNeeded = wrapIfNeeded;
  scope.wrappers = wrappers;
}
