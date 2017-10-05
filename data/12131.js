{
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  function isPrimitive(value) {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    );
  }

  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  var _toString = Object.prototype.toString;

  function isPlainObject(obj) {
    return _toString.call(obj) === "[object Object]";
  }

  function isRegExp(v) {
    return _toString.call(v) === "[object RegExp]";
  }

  function isValidArrayIndex(val) {
    var n = parseFloat(val);
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function toString(val) {
    return val == null
      ? ""
      : typeof val === "object" ? JSON.stringify(val, null, 2) : String(val);
  }

  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(",");

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase
      ? function(val) {
          return map[val.toLowerCase()];
        }
      : function(val) {
          return map[val];
        };
  }

  var isBuiltInTag = makeMap("slot,component", true);
  var isReservedAttribute = makeMap("key,ref,slot,is");

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  var camelizeRE = /-(\w)/g;
  var camelize = cached(function(str) {
    return str.replace(camelizeRE, function(_, c) {
      return c ? c.toUpperCase() : "";
    });
  });
  var capitalize = cached(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function(str) {
    return str
      .replace(hyphenateRE, "$1-$2")
      .replace(hyphenateRE, "$1-$2")
      .toLowerCase();
  });

  function bind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l
        ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)
        : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return ret;
  }

  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }

    return to;
  }

  function toObject(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }

  function noop(a, b, c) {}

  var no = function(a, b, c) {
    return false;
  };

  var identity = function(_) {
    return _;
  };

  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject(a);
    var isObjectB = isObject(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return (
            a.length === b.length &&
            a.every(function(e, i) {
              return looseEqual(e, b[i]);
            })
          );
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return (
            keysA.length === keysB.length &&
            keysA.every(function(key) {
              return looseEqual(a[key], b[key]);
            })
          );
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }

    return -1;
  }

  function once(fn) {
    var called = false;
    return function() {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = "data-server-rendered";
  var ASSET_TYPES = ["component", "directive", "filter"];
  var LIFECYCLE_HOOKS = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "beforeDestroy",
    "destroyed",
    "activated",
    "deactivated"
  ];
  var config = {
    optionMergeStrategies: Object.create(null),
    silent: false,
    productionTip: process.env.NODE_ENV !== "production",
    devtools: process.env.NODE_ENV !== "production",
    performance: false,
    errorHandler: null,
    warnHandler: null,
    ignoredElements: [],
    keyCodes: Object.create(null),
    isReservedTag: no,
    isReservedAttr: no,
    isUnknownElement: no,
    getTagNamespace: noop,
    parsePlatformTagName: identity,
    mustUseProp: no,
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  var emptyObject = Object.freeze({});

  function isReserved(str) {
    var c = (str + "").charCodeAt(0);
    return c === 0x24 || c === 0x5f;
  }

  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  var bailRE = /[^\w.$]/;

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split(".");
    return function(obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return obj;
    };
  }

  var warn = noop;
  var tip = noop;
  var formatComponentName = null;

  if (process.env.NODE_ENV !== "production") {
    var hasConsole = typeof console !== "undefined";
    var classifyRE = /(?:^|[-_])(\w)/g;

    var classify = function(str) {
      return str
        .replace(classifyRE, function(c) {
          return c.toUpperCase();
        })
        .replace(/[-_]/g, "");
    };

    warn = function(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : "";

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn(
          "[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : "")
        );
      }
    };

    formatComponentName = function(vm, includeFile) {
      if (vm.$root === vm) {
        return "<Root>";
      }

      var name =
        typeof vm === "string"
          ? vm
          : typeof vm === "function" && vm.options
            ? vm.options.name
            : vm._isVue
              ? vm.$options.name || vm.$options._componentTag
              : vm.name;
      var file = vm._isVue && vm.$options.__file;

      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? "<" + classify(name) + ">" : "<Anonymous>") +
        (file && includeFile !== false ? " at " + file : "")
      );
    };

    var repeat = function(str, n) {
      var res = "";

      while (n) {
        if (n % 2 === 1) {
          res += str;
        }

        if (n > 1) {
          str += str;
        }

        n >>= 1;
      }

      return res;
    };

    var generateComponentTrace = function(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;

        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];

            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }

          tree.push(vm);
          vm = vm.$parent;
        }

        return (
          "\n\nfound in\n\n" +
          tree
            .map(function(vm, i) {
              return (
                "" +
                (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) +
                (Array.isArray(vm)
                  ? formatComponentName(vm[0]) +
                    "... (" +
                    vm[1] +
                    " recursive calls)"
                  : formatComponentName(vm))
              );
            })
            .join("\n")
        );
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  function handleError(err, vm, info) {
    if (config.errorHandler) {
      config.errorHandler.call(null, err, vm, info);
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("Error in " + info + ': "' + err.toString() + '"', vm);
      }

      if (inBrowser && typeof console !== "undefined") {
        console.error(err);
      } else {
        throw err;
      }
    }
  }

  var hasProto = "__proto__" in {};
  var inBrowser = typeof window !== "undefined";
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
  var isEdge = UA && UA.indexOf("edge/") > 0;
  var isAndroid = UA && UA.indexOf("android") > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var nativeWatch = {}.watch;
  var supportsPassive = false;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test-passive", null, opts);
    } catch (e) {}
  }

  var _isServer;

  var isServerRendering = function() {
    if (_isServer === undefined) {
      if (!inBrowser && typeof global !== "undefined") {
        _isServer = global["process"].env.VUE_ENV === "server";
      } else {
        _isServer = false;
      }
    }

    return _isServer;
  };

  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  function isNative(Ctor) {
    return typeof Ctor === "function" && /native code/.test(Ctor.toString());
  }

  var hasSymbol =
    typeof Symbol !== "undefined" &&
    isNative(Symbol) &&
    typeof Reflect !== "undefined" &&
    isNative(Reflect.ownKeys);

  var nextTick = (function() {
    var callbacks = [];
    var pending = false;
    var timerFunc;

    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    if (typeof Promise !== "undefined" && isNative(Promise)) {
      var p = Promise.resolve();

      var logError = function(err) {
        console.error(err);
      };

      timerFunc = function() {
        p.then(nextTickHandler).catch(logError);

        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (
      typeof MutationObserver !== "undefined" &&
      (isNative(MutationObserver) ||
        MutationObserver.toString() === "[object MutationObserverConstructor]")
    ) {
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });

      timerFunc = function() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else {
      timerFunc = function() {
        setTimeout(nextTickHandler, 0);
      };
    }

    return function queueNextTick(cb, ctx) {
      var _resolve;

      callbacks.push(function() {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, "nextTick");
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });

      if (!pending) {
        pending = true;
        timerFunc();
      }

      if (!cb && typeof Promise !== "undefined") {
        return new Promise(function(resolve, reject) {
          _resolve = resolve;
        });
      }
    };
  })();

  var _Set;

  if (typeof Set !== "undefined" && isNative(Set)) {
    _Set = Set;
  } else {
    _Set = (function() {
      function Set() {
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };

      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    })();
  }

  var uid$1 = 0;

  var Dep = function Dep() {
    this.id = uid$1++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    var subs = this.subs.slice();

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }

    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse"
  ].forEach(function(method) {
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
        len = arguments.length;

      while (len--) args[len] = arguments[len];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case "push":
        case "unshift":
          inserted = args;
          break;

        case "splice":
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      }

      ob.dep.notify();
      return result;
    });
  });
  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  var observerState = {
    shouldConvert: true
  };

  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, "__ob__", this);

    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i], obj[keys[i]]);
    }
  };

  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  function protoAugment(target, src, keys) {
    target.__proto__ = src;
  }

  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  function observe(value, asRootData) {
    if (!isObject(value)) {
      return;
    }

    var ob;

    if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      observerState.shouldConvert &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return ob;
  }

  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    }

    var getter = property && property.get;
    var setter = property && property.set;
    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();
          }

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }

        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;

        if (newVal === value || (newVal !== newVal && value !== value)) {
          return;
        }

        if (process.env.NODE_ENV !== "production" && customSetter) {
          customSetter();
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }

    if (hasOwn(target, key)) {
      target[key] = val;
      return val;
    }

    var ob = target.__ob__;

    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          "Avoid adding reactive properties to a Vue instance or its root $data " +
            "at runtime - declare it upfront in the data option."
        );
      return val;
    }

    if (!ob) {
      target[key] = val;
      return val;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          "Avoid deleting properties on a Vue instance or its root $data " +
            "- just set it to null."
        );
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }

  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  var strats = config.optionMergeStrategies;

  if (process.env.NODE_ENV !== "production") {
    strats.el = strats.propsData = function(parent, child, vm, key) {
      if (!vm) {
        warn(
          'option "' +
            key +
            '" can only be used during instance ' +
            "creation with the `new` keyword."
        );
      }

      return defaultStrat(parent, child);
    };
  }

  function mergeData(to, from) {
    if (!from) {
      return to;
    }

    var key, toVal, fromVal;
    var keys = Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return to;
  }

  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      }

      return function mergedDataFn() {
        return mergeData(
          typeof childVal === "function" ? childVal.call(this) : childVal,
          typeof parentVal === "function" ? parentVal.call(this) : parentVal
        );
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
        var instanceData =
          typeof childVal === "function" ? childVal.call(vm) : childVal;
        var defaultData =
          typeof parentVal === "function" ? parentVal.call(vm) : undefined;

        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function(parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== "function") {
        process.env.NODE_ENV !== "production" &&
          warn(
            'The "data" option should be a function ' +
              "that returns a per-instance value in component " +
              "definitions.",
            vm
          );
        return parentVal;
      }

      return mergeDataOrFn.call(this, parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  function mergeHook(parentVal, childVal) {
    return childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal) ? childVal : [childVal]
      : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function(hook) {
    strats[hook] = mergeHook;
  });

  function mergeAssets(parentVal, childVal) {
    var res = Object.create(parentVal || null);
    return childVal ? extend(res, childVal) : res;
  }

  ASSET_TYPES.forEach(function(type) {
    strats[type + "s"] = mergeAssets;
  });

  strats.watch = function(parentVal, childVal) {
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }

    if (!childVal) {
      return Object.create(parentVal || null);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }

    return ret;
  };

  strats.props = strats.methods = strats.inject = strats.computed = function(
    parentVal,
    childVal
  ) {
    if (!parentVal) {
      return childVal;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return ret;
  };

  strats.provide = mergeDataOrFn;

  var defaultStrat = function(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  function checkComponents(options) {
    for (var key in options.components) {
      var lower = key.toLowerCase();

      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn(
          "Do not use built-in or reserved HTML elements as component " +
            "id: " +
            key
        );
      }
    }
  }

  function normalizeProps(options) {
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === "string") {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else if (process.env.NODE_ENV !== "production") {
          warn("props must be strings when using array syntax.");
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : {
              type: val
            };
      }
    }

    options.props = res;
  }

  function normalizeInject(options) {
    var inject = options.inject;

    if (Array.isArray(inject)) {
      var normalized = (options.inject = {});

      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = inject[i];
      }
    }
  }

  function normalizeDirectives(options) {
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];

        if (typeof def === "function") {
          dirs[key] = {
            bind: def,
            update: def
          };
        }
      }
    }
  }

  function mergeOptions(parent, child, vm) {
    if (process.env.NODE_ENV !== "production") {
      checkComponents(child);
    }

    if (typeof child === "function") {
      child = child.options;
    }

    normalizeProps(child);
    normalizeInject(child);
    normalizeDirectives(child);
    var extendsFrom = child.extends;

    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return options;
  }

  function resolveAsset(options, type, id, warnMissing) {
    if (typeof id !== "string") {
      return;
    }

    var assets = options[type];

    if (hasOwn(assets, id)) {
      return assets[id];
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }

    var PascalCaseId = capitalize(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }

    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

    if (process.env.NODE_ENV !== "production" && warnMissing && !res) {
      warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
    }

    return res;
  }

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];

    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, "default")) {
        value = false;
      } else if (
        !isType(String, prop.type) &&
        (value === "" || value === hyphenate(key))
      ) {
        value = true;
      }
    }

    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }

    if (process.env.NODE_ENV !== "production") {
      assertProp(prop, key, value, vm, absent);
    }

    return value;
  }

  function getPropDefaultValue(vm, prop, key) {
    if (!hasOwn(prop, "default")) {
      return undefined;
    }

    var def = prop.default;

    if (process.env.NODE_ENV !== "production" && isObject(def)) {
      warn(
        'Invalid default value for prop "' +
          key +
          '": ' +
          "Props with type Object/Array must use a factory function " +
          "to return the default value.",
        vm
      );
    }

    if (
      vm &&
      vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key];
    }

    return typeof def === "function" && getType(prop.type) !== "Function"
      ? def.call(vm)
      : def;
  }

  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }

    if (value == null && !prop.required) {
      return;
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }

      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || "");
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        'Invalid prop: type check failed for prop "' +
          name +
          '".' +
          " Expected " +
          expectedTypes.map(capitalize).join(", ") +
          ", got " +
          Object.prototype.toString.call(value).slice(8, -1) +
          ".",
        vm
      );
      return;
    }

    var validator = prop.validator;

    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' +
            name +
            '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);

    if (simpleCheckRE.test(expectedType)) {
      valid = typeof value === expectedType.toLowerCase();
    } else if (expectedType === "Object") {
      valid = isPlainObject(value);
    } else if (expectedType === "Array") {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : "";
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }

    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }

    return false;
  }

  var initProxy;

  if (process.env.NODE_ENV !== "production") {
    var allowedGlobals = makeMap(
      "Infinity,undefined,NaN,isFinite,isNaN," +
        "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," +
        "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," +
        "require"
    );

    var warnNonPresent = function(target, key) {
      warn(
        'Property or method "' +
          key +
          '" is not defined on the instance but ' +
          "referenced during render. Make sure to declare reactive data " +
          "properties in the data option.",
        target
      );
    };

    var hasProxy =
      typeof Proxy !== "undefined" && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta");
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(
              "Avoid overwriting built-in modifier in config.keyCodes: ." + key
            );
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === "_";

        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }

        return has || !isAllowed;
      }
    };
    var getHandler = {
      get: function get(target, key) {
        if (typeof key === "string" && !(key in target)) {
          warnNonPresent(target, key);
        }

        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        var options = vm.$options;
        var handlers =
          options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  var mark;
  var measure;

  if (process.env.NODE_ENV !== "production") {
    var perf = inBrowser && window.performance;

    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function(tag) {
        return perf.mark(tag);
      };

      measure = function(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  var VNode = function VNode(
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {}
  };

  prototypeAccessors.child.get = function() {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function(text) {
    if (text === void 0) text = "";
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  function cloneVNode(vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      vnode.children,
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;
    return cloned;
  }

  function cloneVNodes(vnodes) {
    var len = vnodes.length;
    var res = new Array(len);

    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i]);
    }

    return res;
  }

  var normalizeEvent = cached(function(name) {
    var passive = name.charAt(0) === "&";
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === "~";
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === "!";
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        return fns.apply(null, arguments);
      }
    }

    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, cur, old, event;

    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);

      if (isUndef(cur)) {
        process.env.NODE_ENV !== "production" &&
          warn(
            'Invalid handler for event "' +
              event.name +
              '": got ' +
              String(cur),
            vm
          );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }

        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  function mergeVNodeHook(def, hookKey, hook) {
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      invoker = createFnInvoker([wrappedHook]);
    } else {
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  function extractPropsFromVNodeData(data, Ctor, tag) {
    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);

        if (process.env.NODE_ENV !== "production") {
          var keyInLowerCase = key.toLowerCase();

          if (
            key !== keyInLowerCase &&
            attrs &&
            hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              'Prop "' +
                keyInLowerCase +
                '" is passed to component ' +
                formatComponentName(tag || Ctor) +
                ", but the declared prop name is" +
                ' "' +
                key +
                '". ' +
                "Note that HTML attributes are case-insensitive and camelCased " +
                "props need to use their kebab-case equivalents when using in-DOM " +
                'templates. You should probably use "' +
                altKey +
                '" instead of "' +
                key +
                '".'
            );
          }
        }

        checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      }
    }

    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return true;
      }
    }

    return false;
  }

  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }

    return children;
  }

  function normalizeChildren(children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === "boolean") {
        continue;
      }

      last = res[res.length - 1];

      if (Array.isArray(c)) {
        res.push.apply(
          res,
          normalizeArrayChildren(c, (nestedIndex || "") + "_" + i)
        );
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          last.text += String(c);
        } else if (c !== "") {
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          res[res.length - 1] = createTextVNode(last.text + c.text);
        } else {
          if (
            isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)
          ) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return res;
  }

  function ensureCtor(comp, base) {
    if (comp.__esModule && comp.default) {
      comp = comp.default;
    }

    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      factory.contexts.push(context);
    } else {
      var contexts = (factory.contexts = [context]);
      var sync = true;

      var forceRender = function() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function(res) {
        factory.resolved = ensureCtor(res, baseCtor);

        if (!sync) {
          forceRender();
        }
      });
      var reject = once(function(reason) {
        process.env.NODE_ENV !== "production" &&
          warn(
            "Failed to resolve async component: " +
              String(factory) +
              (reason ? "\nReason: " + reason : "")
          );

        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });
      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === "function") {
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (
          isDef(res.component) &&
          typeof res.component.then === "function"
        ) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function() {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function() {
              if (isUndef(factory.resolved)) {
                reject(
                  process.env.NODE_ENV !== "production"
                    ? "timeout (" + res.timeout + "ms)"
                    : null
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && isDef(c.componentOptions)) {
          return c;
        }
      }
    }
  }

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once$$1) {
    if (once$$1) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;

    Vue.prototype.$on = function(event, fn) {
      var this$1 = this;
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return vm;
    };

    Vue.prototype.$once = function(event, fn) {
      var vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function(event, fn) {
      var this$1 = this;
      var vm = this;

      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }

      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          this$1.$off(event[i$1], fn);
        }

        return vm;
      }

      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (arguments.length === 1) {
        vm._events[event] = null;
        return vm;
      }

      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    };

    Vue.prototype.$emit = function(event) {
      var vm = this;

      if (process.env.NODE_ENV !== "production") {
        var lowerCaseEvent = event.toLowerCase();

        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            'Event "' +
              lowerCaseEvent +
              '" is emitted in component ' +
              formatComponentName(vm) +
              ' but the handler is registered for "' +
              event +
              '". ' +
              "Note that HTML attributes are case-insensitive and you cannot use " +
              "v-on to listen to camelCase events when using in-DOM templates. " +
              'You should probably use "' +
              hyphenate(event) +
              '" instead of "' +
              event +
              '".'
          );
        }
      }

      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);

        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, 'event handler for "' + event + '"');
          }
        }
      }

      return vm;
    };
  }

  function resolveSlots(children, context) {
    var slots = {};

    if (!children) {
      return slots;
    }

    var defaultSlot = [];

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];

      if (
        (child.context === context || child.functionalContext === context) &&
        child.data &&
        child.data.slot != null
      ) {
        var name = child.data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === "template") {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }

    if (!defaultSlot.every(isWhitespace)) {
      slots.default = defaultSlot;
    }

    return slots;
  }

  function isWhitespace(node) {
    return node.isComment || node.text === " ";
  }

  function resolveScopedSlots(fns, res) {
    res = res || {};

    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }

    return res;
  }

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;
    var parent = options.parent;

    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function(vnode, hydrating) {
      var vm = this;

      if (vm._isMounted) {
        callHook(vm, "beforeUpdate");
      }

      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;

      if (!prevVnode) {
        vm.$el = vm.__patch__(
          vm.$el,
          vnode,
          hydrating,
          false,
          vm.$options._parentElm,
          vm.$options._refElm
        );
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      activeInstance = prevActiveInstance;

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }

      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
    };

    Vue.prototype.$forceUpdate = function() {
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function() {
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, "beforeDestroy");
      vm._isBeingDestroyed = true;
      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }

      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      }

      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }

      vm._isDestroyed = true;

      vm.__patch__(vm._vnode, null);

      callHook(vm, "destroyed");
      vm.$off();

      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;

      if (process.env.NODE_ENV !== "production") {
        if (
          (vm.$options.template && vm.$options.template.charAt(0) !== "#") ||
          vm.$options.el ||
          el
        ) {
          warn(
            "You are using the runtime-only build of Vue where the template " +
              "compiler is not available. Either pre-compile the templates into " +
              "render functions, or use the compiler-included build.",
            vm
          );
        } else {
          warn(
            "Failed to mount component: template or render function not defined.",
            vm
          );
        }
      }
    }

    callHook(vm, "beforeMount");
    var updateComponent;

    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
      updateComponent = function() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;
        mark(startTag);

        var vnode = vm._render();

        mark(endTag);
        measure(name + " render", startTag, endTag);
        mark(startTag);

        vm._update(vnode, hydrating);

        mark(endTag);
        measure(name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function() {
        vm._update(vm._render(), hydrating);
      };
    }

    vm._watcher = new Watcher(vm, updateComponent, noop);
    hydrating = false;

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, "mounted");
    }

    return vm;
  }

  function updateChildComponent(
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    if (process.env.NODE_ENV !== "production") {
      isUpdatingChildComponent = true;
    }

    var hasChildren = !!(
      renderChildren ||
      vm.$options._renderChildren ||
      parentVnode.data.scopedSlots ||
      vm.$scopedSlots !== emptyObject
    );
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode;

    if (vm._vnode) {
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren;
    vm.$attrs = parentVnode.data && parentVnode.data.attrs;
    vm.$listeners = listeners;

    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }

      observerState.shouldConvert = true;
      vm.$options.propsData = propsData;
    }

    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }

    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    if (process.env.NODE_ENV !== "production") {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }

    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, "activated");
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, "deactivated");
    }
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit("hook:" + hook);
    }
  }

  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};

    if (process.env.NODE_ENV !== "production") {
      circular = {};
    }

    waiting = flushing = false;
  }

  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;
    queue.sort(function(a, b) {
      return a.id - b.id;
    });

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();

      if (process.env.NODE_ENV !== "production" && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            "You may have an infinite update loop " +
              (watcher.user
                ? 'in watcher with expression "' + watcher.expression + '"'
                : "in a component render function."),
            watcher.vm
          );
          break;
        }
      }
    }

    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState();
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    if (devtools && config.devtools) {
      devtools.emit("flush");
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, "updated");
      }
    }
  }

  function queueActivatedComponent(vm) {
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true);
    }
  }

  function queueWatcher(watcher) {
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      }

      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  var uid$2 = 0;

  var Watcher = function Watcher(vm, expOrFn, cb, options) {
    this.vm = vm;

    vm._watchers.push(this);

    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2;
    this.active = true;
    this.dirty = this.lazy;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression =
      process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";

    if (typeof expOrFn === "function") {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = function() {};

        process.env.NODE_ENV !== "production" &&
          warn(
            'Failed watching path: "' +
              expOrFn +
              '" ' +
              "Watcher only accepts simple dot-delimited paths. " +
              "For full control, use a function instead.",
            vm
          );
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };

  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, 'getter for watcher "' + this.expression + '"');
      } else {
        throw e;
      }
    } finally {
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return value;
  };

  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;
    var i = this.deps.length;

    while (i--) {
      var dep = this$1.deps[i];

      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  Watcher.prototype.update = function update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();

      if (value !== this.value || isObject(value) || this.deep) {
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(
              e,
              this.vm,
              'callback for watcher "' + this.expression + '"'
            );
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  Watcher.prototype.depend = function depend() {
    var this$1 = this;
    var i = this.deps.length;

    while (i--) {
      this$1.deps[i].depend();
    }
  };

  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }

      this.active = false;
    }
  };

  var seenObjects = new _Set();

  function traverse(val) {
    seenObjects.clear();

    _traverse(val, seenObjects);
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);

    if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe((vm._data = {}), true);
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function checkOptionType(vm, name) {
    var option = vm.$options[name];

    if (!isPlainObject(option)) {
      warn('component option "' + name + '" should be an object.', vm);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = (vm._props = {});
    var keys = (vm.$options._propKeys = []);
    var isRoot = !vm.$parent;
    observerState.shouldConvert = isRoot;

    var loop = function(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);

      if (process.env.NODE_ENV !== "production") {
        if (isReservedAttribute(key) || config.isReservedAttr(key)) {
          warn(
            '"' +
              key +
              '" is a reserved attribute and cannot be used as component prop.',
            vm
          );
        }

        defineReactive$$1(props, key, value, function() {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
                "overwritten whenever the parent component re-renders. " +
                "Instead, use a data or computed property based on the prop's " +
                'value. Prop being mutated: "' +
                key +
                '"',
              vm
            );
          }
        });
      } else {
        defineReactive$$1(props, key, value);
      }

      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);

    observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data =
      typeof data === "function" ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== "production" &&
        warn(
          "data functions should return an object:\n" +
            "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
          vm
        );
    }

    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];

      if (process.env.NODE_ENV !== "production") {
        if (methods && hasOwn(methods, key)) {
          warn(
            'method "' + key + '" has already been defined as a data property.',
            vm
          );
        }
      }

      if (props && hasOwn(props, key)) {
        process.env.NODE_ENV !== "production" &&
          warn(
            'The data property "' +
              key +
              '" is already declared as a prop. ' +
              "Use prop default value instead.",
            vm
          );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }

    observe(data, true);
  }

  function getData(data, vm) {
    try {
      return data.call(vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    process.env.NODE_ENV !== "production" && checkOptionType(vm, "computed");
    var watchers = (vm._computedWatchers = Object.create(null));

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === "function" ? userDef : userDef.get;

      if (process.env.NODE_ENV !== "production" && getter == null) {
        warn('Getter is missing for computed property "' + key + '".', vm);
      }

      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );

      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else if (process.env.NODE_ENV !== "production") {
        if (key in vm.$data) {
          warn(
            'The computed property "' + key + '" is already defined in data.',
            vm
          );
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(
            'The computed property "' + key + '" is already defined as a prop.',
            vm
          );
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    if (typeof userDef === "function") {
      sharedPropertyDefinition.get = createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? userDef.cache !== false ? createComputedGetter(key) : userDef.get
        : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }

    if (
      process.env.NODE_ENV !== "production" &&
      sharedPropertyDefinition.set === noop
    ) {
      sharedPropertyDefinition.set = function() {
        warn(
          'Computed property "' +
            key +
            '" was assigned to but it has no setter.',
          this
        );
      };
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    process.env.NODE_ENV !== "production" && checkOptionType(vm, "methods");
    var props = vm.$options.props;

    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);

      if (process.env.NODE_ENV !== "production") {
        if (methods[key] == null) {
          warn(
            'method "' +
              key +
              '" has an undefined value in the component definition. ' +
              "Did you reference the function correctly?",
            vm
          );
        }

        if (props && hasOwn(props, key)) {
          warn('method "' + key + '" has already been defined as a prop.', vm);
        }
      }
    }
  }

  function initWatch(vm, watch) {
    process.env.NODE_ENV !== "production" && checkOptionType(vm, "watch");

    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, keyOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === "string") {
      handler = vm[handler];
    }

    return vm.$watch(keyOrFn, handler, options);
  }

  function stateMixin(Vue) {
    var dataDef = {};

    dataDef.get = function() {
      return this._data;
    };

    var propsDef = {};

    propsDef.get = function() {
      return this._props;
    };

    if (process.env.NODE_ENV !== "production") {
      dataDef.set = function(newData) {
        warn(
          "Avoid replacing instance root $data. " +
            "Use nested data properties instead.",
          this
        );
      };

      propsDef.set = function() {
        warn("$props is readonly.", this);
      };
    }

    Object.defineProperty(Vue.prototype, "$data", dataDef);
    Object.defineProperty(Vue.prototype, "$props", propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function(expOrFn, cb, options) {
      var vm = this;

      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        cb.call(vm, watcher.value);
      }

      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  function initProvide(vm) {
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      observerState.shouldConvert = false;
      Object.keys(result).forEach(function(key) {
        if (process.env.NODE_ENV !== "production") {
          defineReactive$$1(vm, key, result[key], function() {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                'injection being mutated: "' +
                key +
                '"',
              vm
            );
          });
        } else {
          defineReactive$$1(vm, key, result[key]);
        }
      });
      observerState.shouldConvert = true;
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key];
        var source = vm;

        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (process.env.NODE_ENV !== "production" && !source) {
          warn('Injection "' + key + '" not found', vm);
        }
      }

      return result;
    }
  }

  function createFunctionalComponent(Ctor, propsData, data, context, children) {
    var props = {};
    var propOptions = Ctor.options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || {});
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var _context = Object.create(context);

    var h = function(a, b, c, d) {
      return createElement(_context, a, b, c, d, true);
    };

    var vnode = Ctor.options.render.call(null, h, {
      data: data,
      props: props,
      children: children,
      parent: context,
      listeners: data.on || {},
      injections: resolveInject(Ctor.options.inject, context),
      slots: function() {
        return resolveSlots(children, context);
      }
    });

    if (vnode instanceof VNode) {
      vnode.functionalContext = context;
      vnode.functionalOptions = Ctor.options;

      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }

    return vnode;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = (vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance,
          parentElm,
          refElm
        ));
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        var mountedNode = vnode;
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = (vnode.componentInstance = oldVnode.componentInstance);
      updateChildComponent(
        child,
        options.propsData,
        options.listeners,
        vnode,
        options.children
      );
    },
    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, "mounted");
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true);
        }
      }
    },
    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true);
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    if (typeof Ctor !== "function") {
      if (process.env.NODE_ENV !== "production") {
        warn("Invalid Component definition: " + String(Ctor), context);
      }

      return;
    }

    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);

      if (Ctor === undefined) {
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        );
      }
    }

    data = data || {};
    resolveConstructorOptions(Ctor);

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(
        Ctor,
        propsData,
        data,
        context,
        children
      );
    }

    var listeners = data.on;
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    }

    mergeHooks(data);
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
      data,
      undefined,
      undefined,
      undefined,
      context,
      {
        Ctor: Ctor,
        propsData: propsData,
        listeners: listeners,
        tag: tag,
        children: children
      },
      asyncFactory
    );
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return new vnodeComponentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function(a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  function transformModel(options, data) {
    var prop = (options.model && options.model.prop) || "value";
    var event = (options.model && options.model.event) || "input";
    (data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});

    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  function createElement(
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          "Avoid using observed data object as vnode data: " +
            JSON.stringify(data) +
            "\n" +
            "Always create fresh vnode data objects in each render!",
          context
        );
      return createEmptyVNode();
    }

    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      return createEmptyVNode();
    }

    if (
      process.env.NODE_ENV !== "production" &&
      isDef(data) &&
      isDef(data.key) &&
      !isPrimitive(data.key)
    ) {
      warn(
        "Avoid using non-primitive value as key, " +
          "use string/number value instead.",
        context
      );
    }

    if (Array.isArray(children) && typeof children[0] === "function") {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === "string") {
      var Ctor;
      ns = config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        vnode = new VNode(
          config.parsePlatformTagName(tag),
          data,
          children,
          undefined,
          undefined,
          context
        );
      } else if (
        isDef((Ctor = resolveAsset(context.$options, "components", tag)))
      ) {
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      vnode = createComponent(tag, data, context, children);
    }

    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }

      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns) {
    vnode.ns = ns;

    if (vnode.tag === "foreignObject") {
      return;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && isUndef(child.ns)) {
          applyNS(child, ns);
        }
      }
    }
  }

  function renderList(val, render) {
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === "string") {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === "number") {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }

    if (isDef(ret)) {
      ret._isVList = true;
    }

    return ret;
  }

  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];

    if (scopedSlotFn) {
      props = props || {};

      if (bindObject) {
        props = extend(extend({}, bindObject), props);
      }

      return scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];

      if (slotNodes && process.env.NODE_ENV !== "production") {
        slotNodes._rendered &&
          warn(
            'Duplicate presence of slot "' +
              name +
              '" found in the same render tree ' +
              "- this will likely cause render errors.",
            this
          );
        slotNodes._rendered = true;
      }

      return slotNodes || fallback;
    }
  }

  function resolveFilter(id) {
    return resolveAsset(this.$options, "filters", id, true) || identity;
  }

  function checkKeyCodes(eventKeyCode, key, builtInAlias) {
    var keyCodes = config.keyCodes[key] || builtInAlias;

    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1;
    } else {
      return keyCodes !== eventKeyCode;
    }
  }

  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        process.env.NODE_ENV !== "production" &&
          warn(
            "v-bind without argument expects an Object or Array value",
            this
          );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function(key) {
          if (key === "class" || key === "style" || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash =
              asProp || config.mustUseProp(tag, type, key)
                ? data.domProps || (data.domProps = {})
                : data.attrs || (data.attrs = {});
          }

          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + key] = function($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop(key);
      }
    }

    return data;
  }

  function renderStatic(index, isInFor) {
    var tree = this._staticTrees[index];

    if (tree && !isInFor) {
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }

    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== "string") {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        process.env.NODE_ENV !== "production" &&
          warn("v-on without argument expects an Object value", this);
      } else {
        var on = (data.on = data.on ? extend({}, data.on) : {});

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(ours, existing) : ours;
        }
      }
    }

    return data;
  }

  function initRender(vm) {
    vm._vnode = null;
    vm._staticTrees = null;
    var parentVnode = (vm.$vnode = vm.$options._parentVnode);
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;

    vm._c = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };

    vm.$createElement = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    var parentData = parentVnode && parentVnode.data;

    if (process.env.NODE_ENV !== "production") {
      defineReactive$$1(
        vm,
        "$attrs",
        parentData && parentData.attrs,
        function() {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        },
        true
      );
      defineReactive$$1(
        vm,
        "$listeners",
        vm.$options._parentListeners,
        function() {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        },
        true
      );
    } else {
      defineReactive$$1(
        vm,
        "$attrs",
        parentData && parentData.attrs,
        null,
        true
      );
      defineReactive$$1(
        vm,
        "$listeners",
        vm.$options._parentListeners,
        null,
        true
      );
    }
  }

  function renderMixin(Vue) {
    Vue.prototype.$nextTick = function(fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function() {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        for (var key in vm.$slots) {
          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
        }
      }

      vm.$scopedSlots =
        (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

      if (staticRenderFns && !vm._staticTrees) {
        vm._staticTrees = [];
      }

      vm.$vnode = _parentVnode;
      var vnode;

      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render function");

        if (process.env.NODE_ENV !== "production") {
          vnode = vm.$options.renderError
            ? vm.$options.renderError.call(
                vm._renderProxy,
                vm.$createElement,
                e
              )
            : vm._vnode;
        } else {
          vnode = vm._vnode;
        }
      }

      if (!(vnode instanceof VNode)) {
        if (process.env.NODE_ENV !== "production" && Array.isArray(vnode)) {
          warn(
            "Multiple root nodes returned from render function. Render function " +
              "should return a single root node.",
            vm
          );
        }

        vnode = createEmptyVNode();
      }

      vnode.parent = _parentVnode;
      return vnode;
    };

    Vue.prototype._o = markOnce;
    Vue.prototype._n = toNumber;
    Vue.prototype._s = toString;
    Vue.prototype._l = renderList;
    Vue.prototype._t = renderSlot;
    Vue.prototype._q = looseEqual;
    Vue.prototype._i = looseIndexOf;
    Vue.prototype._m = renderStatic;
    Vue.prototype._f = resolveFilter;
    Vue.prototype._k = checkKeyCodes;
    Vue.prototype._b = bindObjectProps;
    Vue.prototype._v = createTextVNode;
    Vue.prototype._e = createEmptyVNode;
    Vue.prototype._u = resolveScopedSlots;
    Vue.prototype._g = bindObjectListeners;
  }

  var uid = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function(options) {
      var vm = this;
      vm._uid = uid++;
      var startTag, endTag;

      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        startTag = "vue-perf-init:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      vm._isVue = true;

      if (options && options._isComponent) {
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }

      if (process.env.NODE_ENV !== "production") {
        initProxy(vm);
      } else {
        vm._renderProxy = vm;
      }

      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, "beforeCreate");
      initInjections(vm);
      initState(vm);
      initProvide(vm);
      callHook(vm, "created");

      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = (vm.$options = Object.create(vm.constructor.options));
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;

    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        Ctor.superOptions = superOptions;
        var modifiedOptions = resolveModifiedOptions(Ctor);

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }

    return modified;
  }

  function dedupe(latest, extended, sealed) {
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];

      for (var i = 0; i < latest.length; i++) {
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }

      return res;
    } else {
      return latest;
    }
  }

  function Vue$2(options) {
    if (process.env.NODE_ENV !== "production" && !(this instanceof Vue$2)) {
      warn("Vue is a constructor and should be called with the `new` keyword");
    }

    this._init(options);
  }

  initMixin(Vue$2);
  stateMixin(Vue$2);
  eventsMixin(Vue$2);
  lifecycleMixin(Vue$2);
  renderMixin(Vue$2);

  function initUse(Vue) {
    Vue.use = function(plugin) {
      var installedPlugins =
        this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === "function") {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === "function") {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return this;
    };
  }

  function initMixin$1(Vue) {
    Vue.mixin = function(mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  function initExtend(Vue) {
    Vue.cid = 0;
    var cid = 1;

    Vue.extend = function(extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;

      if (process.env.NODE_ENV !== "production") {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn(
            'Invalid component name: "' +
              name +
              '". Component names ' +
              "can only contain alphanumeric characters and the hyphen, " +
              "and must start with a letter."
          );
        }
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub["super"] = Super;

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;
      ASSET_TYPES.forEach(function(type) {
        Sub[type] = Super[type];
      });

      if (name) {
        Sub.options.components[name] = Sub;
      }

      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  function initAssetRegisters(Vue) {
    ASSET_TYPES.forEach(function(type) {
      Vue[type] = function(id, definition) {
        if (!definition) {
          return this.options[type + "s"][id];
        } else {
          if (process.env.NODE_ENV !== "production") {
            if (type === "component" && config.isReservedTag(id)) {
              warn(
                "Do not use built-in or reserved HTML elements as component " +
                  "id: " +
                  id
              );
            }
          }

          if (type === "component" && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === "directive" && typeof definition === "function") {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + "s"][id] = definition;
          return definition;
        }
      };
    });
  }

  var patternTypes = [String, RegExp, Array];

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === "string") {
      return pattern.split(",").indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }

    return false;
  }

  function pruneCache(cache, current, filter) {
    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          if (cachedNode !== current) {
            pruneCacheEntry(cachedNode);
          }

          cache[key] = null;
        }
      }
    }
  }

  function pruneCacheEntry(vnode) {
    if (vnode) {
      vnode.componentInstance.$destroy();
    }
  }

  var KeepAlive = {
    name: "keep-alive",
    abstract: true,
    props: {
      include: patternTypes,
      exclude: patternTypes
    },
    created: function created() {
      this.cache = Object.create(null);
    },
    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache[key]);
      }
    },
    watch: {
      include: function include(val) {
        pruneCache(this.cache, this._vnode, function(name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this.cache, this._vnode, function(name) {
          return !matches(val, name);
        });
      }
    },
    render: function render() {
      var vnode = getFirstComponentChild(this.$slots.default);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        var name = getComponentName(componentOptions);

        if (
          name &&
          ((this.include && !matches(this.include, name)) ||
            (this.exclude && matches(this.exclude, name)))
        ) {
          return vnode;
        }

        var key =
          vnode.key == null
            ? componentOptions.Ctor.cid +
              (componentOptions.tag ? "::" + componentOptions.tag : "")
            : vnode.key;

        if (this.cache[key]) {
          vnode.componentInstance = this.cache[key].componentInstance;
        } else {
          this.cache[key] = vnode;
        }

        vnode.data.keepAlive = true;
      }

      return vnode;
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  function initGlobalAPI(Vue) {
    var configDef = {};

    configDef.get = function() {
      return config;
    };

    if (process.env.NODE_ENV !== "production") {
      configDef.set = function() {
        warn(
          "Do not replace the Vue.config object, set individual fields instead."
        );
      };
    }

    Object.defineProperty(Vue, "config", configDef);
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function(type) {
      Vue.options[type + "s"] = Object.create(null);
    });
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$2);
  Object.defineProperty(Vue$2.prototype, "$isServer", {
    get: isServerRendering
  });
  Object.defineProperty(Vue$2.prototype, "$ssrContext", {
    get: function get() {
      return this.$vnode && this.$vnode.ssrContext;
    }
  });
  Vue$2.version = "2.4.2";
  var namespaceMap = {};

  function createElement$1(tagName) {
    return new renderer.Element(tagName);
  }

  function createElementNS(namespace, tagName) {
    return new renderer.Element(namespace + ":" + tagName);
  }

  function createTextNode(text) {
    return new renderer.TextNode(text);
  }

  function createComment(text) {
    return new renderer.Comment(text);
  }

  function insertBefore(node, target, before) {
    if (target.nodeType === 3) {
      if (node.type === "text") {
        node.setAttr("value", target.text);
        target.parentNode = node;
      } else {
        var text = createElement$1("text");
        text.setAttr("value", target.text);
        node.insertBefore(text, before);
      }

      return;
    }

    node.insertBefore(target, before);
  }

  function removeChild(node, child) {
    if (child.nodeType === 3) {
      node.setAttr("value", "");
      return;
    }

    node.removeChild(child);
  }

  function appendChild(node, child) {
    if (child.nodeType === 3) {
      if (node.type === "text") {
        node.setAttr("value", child.text);
        child.parentNode = node;
      } else {
        var text = createElement$1("text");
        text.setAttr("value", child.text);
        node.appendChild(text);
      }

      return;
    }

    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.type;
  }

  function setTextContent(node, text) {
    node.parentNode.setAttr("value", text);
  }

  function setAttribute(node, key, val) {
    node.setAttr(key, val);
  }

  var nodeOps = Object.freeze({
    namespaceMap: namespaceMap,
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });
  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;

    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  var emptyNode = new VNode("", {}, []);
  var hooks = ["create", "activate", "update", "remove", "destroy"];

  function sameVnode(a, b) {
    return (
      a.key === b.key &&
      ((a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)) ||
        (isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)))
    );
  }

  function sameInputType(a, b) {
    if (a.tag !== "input") {
      return true;
    }

    var i;
    var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return typeA === typeB;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(
        nodeOps.tagName(elm).toLowerCase(),
        {},
        [],
        undefined,
        elm
      );
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    var inPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested;

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        if (process.env.NODE_ENV !== "production") {
          if (data && data.pre) {
            inPre++;
          }

          if (
            !inPre &&
            !vnode.ns &&
            !(
              config.ignoredElements.length &&
              config.ignoredElements.indexOf(tag) > -1
            ) &&
            config.isUnknownElement(tag)
          ) {
            warn(
              "Unknown custom element: <" +
                tag +
                "> - did you " +
                "register the component correctly? For recursive components, " +
                'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        {
          var appendAsTree = isDef(data) && isTrue(data.appendAsTree);

          if (!appendAsTree) {
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }

            insert(parentElm, vnode.elm, refElm);
          }

          createChildren(vnode, children, insertedVnodeQueue);

          if (appendAsTree) {
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }

            insert(parentElm, vnode.elm, refElm);
          }
        }

        if (process.env.NODE_ENV !== "production" && data && data.pre) {
          inPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef((i = i.hook)) && isDef((i = i.init))) {
          i(vnode, false, parentElm, refElm);
        }

        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(
          insertedVnodeQueue,
          vnode.data.pendingInsert
        );
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        registerRef(vnode);
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      }

      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook;

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    function setScope(vnode) {
      var i;
      var ancestor = vnode;

      while (ancestor) {
        if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
          nodeOps.setAttribute(vnode.elm, i, "");
        }

        ancestor = ancestor.parent;
      }

      if (
        isDef((i = activeInstance)) &&
        i !== vnode.context &&
        isDef((i = i.$options._scopeId))
      ) {
        nodeOps.setAttribute(vnode.elm, i, "");
      }
    }

    function addVnodes(
      parentElm,
      refElm,
      vnodes,
      startIdx,
      endIdx,
      insertedVnodeQueue
    ) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef((i = vnode.children))) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          rm.listeners += listeners;
        } else {
          rm = createRmCb(vnode.elm, listeners);
        }

        if (
          isDef((i = vnode.componentInstance)) &&
          isDef((i = i._vnode)) &&
          isDef(i.data)
        ) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(
      parentElm,
      oldCh,
      newCh,
      insertedVnodeQueue,
      removeOnly
    ) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, elmToMove, refElm;
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx];
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove &&
            nodeOps.insertBefore(
              parentElm,
              oldStartVnode.elm,
              nodeOps.nextSibling(oldEndVnode.elm)
            );
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove &&
            nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : null;

          if (isUndef(idxInOld)) {
            createElm(
              newStartVnode,
              insertedVnodeQueue,
              parentElm,
              oldStartVnode.elm
            );
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];

            if (process.env.NODE_ENV !== "production" && !elmToMove) {
              warn(
                "It seems there are duplicate keys that is causing an update error. " +
                  "Make sure each v-for item has a unique key."
              );
            }

            if (sameVnode(elmToMove, newStartVnode)) {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove &&
                nodeOps.insertBefore(
                  parentElm,
                  elmToMove.elm,
                  oldStartVnode.elm
                );
              newStartVnode = newCh[++newStartIdx];
            } else {
              createElm(
                newStartVnode,
                insertedVnodeQueue,
                parentElm,
                oldStartVnode.elm
              );
              newStartVnode = newCh[++newStartIdx];
            }
          }
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1])
          ? null
          : newCh[newEndIdx + 1].elm;
        addVnodes(
          parentElm,
          refElm,
          newCh,
          newStartIdx,
          newEndIdx,
          insertedVnodeQueue
        );
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = (vnode.elm = oldVnode.elm);

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      }

      if (
        isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef((i = data.hook)) && isDef((i = i.update))) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, "");
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, "");
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }

      if (isDef(data)) {
        if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var bailed = false;
    var isRenderedModule = makeMap(
      "attrs,style,class,staticClass,staticStyle,key"
    );

    function hydrate(elm, vnode, insertedVnodeQueue) {
      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.elm = elm;
        vnode.isAsyncPlaceholder = true;
        return true;
      }

      if (process.env.NODE_ENV !== "production") {
        if (!assertNodeMatch(elm, vnode)) {
          return false;
        }
      }

      vnode.elm = elm;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;

      if (isDef(data)) {
        if (isDef((i = data.hook)) && isDef((i = i.init))) {
          i(vnode, true);
        }

        if (isDef((i = vnode.componentInstance))) {
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (
                !childNode ||
                !hydrate(childNode, children[i$1], insertedVnodeQueue)
              ) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            }

            if (!childrenMatch || childNode) {
              if (
                process.env.NODE_ENV !== "production" &&
                typeof console !== "undefined" &&
                !bailed
              ) {
                bailed = true;
                console.warn("Parent: ", elm);
                console.warn(
                  "Mismatching childNodes vs. VNodes: ",
                  elm.childNodes,
                  children
                );
              }

              return false;
            }
          }
        }

        if (isDef(data)) {
          for (var key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return true;
    }

    function assertNodeMatch(node, vnode) {
      if (isDef(vnode.tag)) {
        return (
          vnode.tag.indexOf("vue-component") === 0 ||
          vnode.tag.toLowerCase() ===
            (node.tagName && node.tagName.toLowerCase())
        );
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(
      oldVnode,
      vnode,
      hydrating,
      removeOnly,
      parentElm,
      refElm
    ) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else if (process.env.NODE_ENV !== "production") {
                warn(
                  "The client-side rendered virtual DOM tree is not matching " +
                    "server-rendered content. This is likely caused by incorrect " +
                    "HTML markup, for example nesting block-level elements inside " +
                    "<p>, or missing <tbody>. Bailing hydration and performing " +
                    "full client-side render."
                );
              }
            }

            oldVnode = emptyNodeAt(oldVnode);
          }

          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);
          createElm(
            vnode,
            insertedVnodeQueue,
            oldElm._leaveCb ? null : parentElm$1,
            nodeOps.nextSibling(oldElm)
          );

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;

            while (ancestor) {
              ancestor.elm = vnode.elm;
              ancestor = ancestor.parent;
            }

            if (isPatchable(vnode)) {
              for (var i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode.parent);
              }
            }
          }

          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(
      oldVnode.data.directives,
      oldVnode.context
    );
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        callHook$1(dir, "bind", vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        dir.oldValue = oldDir.value;
        callHook$1(dir, "update", vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(
          vnode.data.hook || (vnode.data.hook = {}),
          "insert",
          callInsert
        );
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(
        vnode.data.hook || (vnode.data.hook = {}),
        "postpatch",
        function() {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(
              dirsWithPostpatch[i],
              "componentUpdated",
              vnode,
              oldVnode
            );
          }
        }
      );
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);

    if (!dirs) {
      return res;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
    }

    return res;
  }

  function getRawDirName(dir) {
    return (
      dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".")
    );
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(
          e,
          vnode.context,
          "directive " + dir.name + " " + hook + " hook"
        );
      }
    }
  }

  var baseModules = [ref, directives];

  function updateAttrs(oldVnode, vnode) {
    if (!oldVnode.data.attrs && !vnode.data.attrs) {
      return;
    }

    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};

    if (attrs.__ob__) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];

      if (old !== cur) {
        elm.setAttr(key, cur);
      }
    }

    for (key in oldAttrs) {
      if (attrs[key] == null) {
        elm.setAttr(key);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var ctx = vnode.context;
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (
      !data.staticClass &&
      !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))
    ) {
      return;
    }

    var oldClassList = [];
    var oldStaticClass = oldData.staticClass;

    if (oldStaticClass) {
      oldClassList.push.apply(oldClassList, oldStaticClass);
    }

    if (oldData.class) {
      oldClassList.push.apply(oldClassList, oldData.class);
    }

    var classList = [];
    var staticClass = data.staticClass;

    if (staticClass) {
      classList.push.apply(classList, staticClass);
    }

    if (data.class) {
      classList.push.apply(classList, data.class);
    }

    var style = getStyle(oldClassList, classList, ctx);

    for (var key in style) {
      el.setStyle(key, style[key]);
    }
  }

  function getStyle(oldClassList, classList, ctx) {
    var stylesheet = ctx.$options.style || {};
    var result = {};
    classList.forEach(function(name) {
      var style = stylesheet[name];
      extend(result, style);
    });
    oldClassList.forEach(function(name) {
      var style = stylesheet[name];

      for (var key in style) {
        if (!result.hasOwnProperty(key)) {
          result[key] = "";
        }
      }
    });
    return result;
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  var target$1;

  function add$1(event, handler, once, capture) {
    if (capture) {
      console.log("Weex do not support event in bubble phase.");
      return;
    }

    if (once) {
      var oldHandler = handler;
      var _target = target$1;

      handler = function(ev) {
        var res =
          arguments.length === 1
            ? oldHandler(ev)
            : oldHandler.apply(null, arguments);

        if (res !== null) {
          remove$2(event, null, null, _target);
        }
      };
    }

    target$1.addEvent(event, handler);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEvent(event);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (!oldVnode.data.on && !vnode.data.on) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  var normalize = cached(camelize);

  function createStyle(oldVnode, vnode) {
    if (!vnode.data.staticStyle) {
      updateStyle(oldVnode, vnode);
      return;
    }

    var elm = vnode.elm;
    var staticStyle = vnode.data.staticStyle;

    for (var name in staticStyle) {
      if (staticStyle[name]) {
        elm.setStyle(normalize(name), staticStyle[name]);
      }
    }

    updateStyle(oldVnode, vnode);
  }

  function updateStyle(oldVnode, vnode) {
    if (!oldVnode.data.style && !vnode.data.style) {
      return;
    }

    var cur, name;
    var elm = vnode.elm;
    var oldStyle = oldVnode.data.style || {};
    var style = vnode.data.style || {};
    var needClone = style.__ob__;

    if (Array.isArray(style)) {
      style = vnode.data.style = toObject$1(style);
    }

    if (needClone) {
      style = vnode.data.style = extend({}, style);
    }

    for (name in oldStyle) {
      if (!style[name]) {
        elm.setStyle(normalize(name), "");
      }
    }

    for (name in style) {
      cur = style[name];
      elm.setStyle(normalize(name), cur);
    }
  }

  function toObject$1(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }

  var style = {
    create: createStyle,
    update: updateStyle
  };

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }

    if (typeof def$$1 === "object") {
      var res = {};

      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || "v"));
      }

      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === "string") {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function(name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });
  var raf =
    inBrowser && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout;
  var transition = {
    create: enter,
    activate: enter,
    remove: leave
  };

  function enter(_, vnode) {
    var el = vnode.elm;

    if (el._leaveCb) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (!data) {
      return;
    }

    if (el._enterCb) {
      return;
    }

    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;

    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== "") {
      return;
    }

    var startClass = isAppear ? appearClass : enterClass;
    var toClass = isAppear ? appearToClass : enterToClass;
    var activeClass = isAppear ? appearActiveClass : enterActiveClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear
      ? typeof appear === "function" ? appear : enter
      : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear
      ? appearCancelled || enterCancelled
      : enterCancelled;
    var userWantsControl =
      enterHook && (enterHook._length || enterHook.length) > 1;
    var stylesheet = vnode.context.$options.style || {};
    var startState = stylesheet[startClass];
    var transitionProperties =
      (stylesheet["@TRANSITION"] && stylesheet["@TRANSITION"][activeClass]) ||
      {};
    var endState = getEnterTargetState(
      el,
      stylesheet,
      startClass,
      toClass,
      activeClass,
      vnode.context
    );
    var needAnimation = Object.keys(endState).length > 0;
    var cb = (el._enterCb = once(function() {
      if (cb.cancelled) {
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    }));
    setTimeout(function() {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (
        pendingNode &&
        pendingNode.context === vnode.context &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);

      if (needAnimation) {
        var animation = vnode.context.$requireWeexModule("animation");
        animation.transition(
          el.ref,
          {
            styles: endState,
            duration: transitionProperties.duration || 0,
            delay: transitionProperties.delay || 0,
            timingFunction: transitionProperties.timingFunction || "linear"
          },
          userWantsControl ? noop : cb
        );
      } else if (!userWantsControl) {
        cb();
      }
    }, 16);
    beforeEnterHook && beforeEnterHook(el);

    if (startState) {
      for (var key in startState) {
        el.setStyle(key, startState[key]);
      }
    }

    if (!needAnimation && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    if (el._enterCb) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (!data) {
      return rm();
    }

    if (el._leaveCb) {
      return;
    }

    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var userWantsControl = leave && (leave._length || leave.length) > 1;
    var stylesheet = vnode.context.$options.style || {};
    var startState = stylesheet[leaveClass];
    var endState = stylesheet[leaveToClass] || stylesheet[leaveActiveClass];
    var transitionProperties =
      (stylesheet["@TRANSITION"] &&
        stylesheet["@TRANSITION"][leaveActiveClass]) ||
      {};
    var cb = (el._leaveCb = once(function() {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }

      if (cb.cancelled) {
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    }));

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      var animation = vnode.context.$requireWeexModule("animation");

      if (cb.cancelled) {
        return;
      }

      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[
          vnode.key
        ] = vnode;
      }

      beforeLeave && beforeLeave(el);

      if (startState) {
        animation.transition(
          el.ref,
          {
            styles: startState
          },
          next
        );
      } else {
        next();
      }

      function next() {
        animation.transition(
          el.ref,
          {
            styles: endState,
            duration: transitionProperties.duration || 0,
            delay: transitionProperties.delay || 0,
            timingFunction: transitionProperties.timingFunction || "linear"
          },
          userWantsControl ? noop : cb
        );
      }

      leave && leave(el, cb);

      if (!endState && !userWantsControl) {
        cb();
      }
    }
  }

  function getEnterTargetState(
    el,
    stylesheet,
    startClass,
    endClass,
    activeClass,
    vm
  ) {
    var targetState = {};
    var startState = stylesheet[startClass];
    var endState = stylesheet[endClass];
    var activeState = stylesheet[activeClass];

    if (startState) {
      for (var key in startState) {
        targetState[key] = el.style[key];

        if (
          process.env.NODE_ENV !== "production" &&
          targetState[key] == null &&
          (!activeState || activeState[key] == null) &&
          (!endState || endState[key] == null)
        ) {
          warn(
            'transition property "' +
              key +
              '" is declared in enter starting class (.' +
              startClass +
              "), " +
              "but not declared anywhere in enter ending class (." +
              endClass +
              "), " +
              "enter active cass (." +
              activeClass +
              ") or the element's default styling. " +
              "Note in Weex, CSS properties need explicit values to be transitionable."
          );
        }
      }
    }

    if (activeState) {
      for (var key$1 in activeState) {
        if (key$1.indexOf("transition") !== 0) {
          targetState[key$1] = activeState[key$1];
        }
      }
    }

    if (endState) {
      extend(targetState, endState);
    }

    return targetState;
  }

  var platformModules = [attrs, klass, events, style, transition];
  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules,
    LONG_LIST_THRESHOLD: 10
  });
  var platformDirectives = {};
  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;

    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;

    for (var key in options.propsData) {
      data[key] = comp[key];
    }

    var listeners = options._parentListeners;

    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h("keep-alive", {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  var Transition$1 = {
    name: "transition",
    props: transitionProps,
    abstract: true,
    render: function render(h) {
      var this$1 = this;
      var children = this.$options._renderChildren;

      if (!children) {
        return;
      }

      children = children.filter(function(c) {
        return c.tag || isAsyncPlaceholder(c);
      });

      if (!children.length) {
        return;
      }

      if (process.env.NODE_ENV !== "production" && children.length > 1) {
        warn(
          "<transition> can only be used on a single element. Use " +
            "<transition-group> for lists.",
          this.$parent
        );
      }

      var mode = this.mode;

      if (
        process.env.NODE_ENV !== "production" &&
        mode &&
        mode !== "in-out" &&
        mode !== "out-in"
      ) {
        warn("invalid <transition> mode: " + mode, this.$parent);
      }

      var rawChild = children[0];

      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      var child = getRealChild(rawChild);

      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      var id = "__transition-" + this._uid + "-";
      child.key =
        child.key == null
          ? child.isComment ? id + "comment" : id + child.tag
          : isPrimitive(child.key)
            ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key
            : child.key;
      var data = ((child.data || (child.data = {})
      ).transition = extractTransitionData(this));
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      if (
        child.data.directives &&
        child.data.directives.some(function(d) {
          return d.name === "show";
        })
      ) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild)
      ) {
        var oldData = oldChild && (oldChild.data.transition = extend({}, data));

        if (mode === "out-in") {
          this._leaving = true;
          mergeVNodeHook(oldData, "afterLeave", function() {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === "in-out") {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }

          var delayedLeave;

          var performLeave = function() {
            delayedLeave();
          };

          mergeVNodeHook(data, "afterEnter", performLeave);
          mergeVNodeHook(data, "enterCancelled", performLeave);
          mergeVNodeHook(oldData, "delayLeave", function(leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };
  var props = extend(
    {
      tag: String,
      moveClass: String
    },
    transitionProps
  );
  delete props.mode;
  var TransitionGroup = {
    props: props,
    created: function created() {
      var dom = this.$requireWeexModule("dom");

      this.getPosition = function(el) {
        return new Promise(function(resolve, reject) {
          dom.getComponentRect(el.ref, function(res) {
            if (!res.result) {
              reject(new Error("failed to get rect for element: " + el.tag));
            } else {
              resolve(res.size);
            }
          });
        });
      };

      var animation = this.$requireWeexModule("animation");

      this.animate = function(el, options) {
        return new Promise(function(resolve) {
          animation.transition(el.ref, options, resolve);
        });
      };
    },
    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || "span";
      var map = Object.create(null);
      var prevChildren = (this.prevChildren = this.children);
      var rawChildren = this.$slots.default || [];
      var children = (this.children = []);
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];

        if (c.tag) {
          if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else if (process.env.NODE_ENV !== "production") {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        prevChildren.forEach(function(c) {
          c.data.transition = transitionData;

          if (map[c.key]) {
            kept.push(c);
          } else {
            removed.push(c);
          }
        });
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },
    beforeUpdate: function beforeUpdate() {
      this.__patch__(this._vnode, this.kept, false, true);

      this._vnode = this.kept;
    },
    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || "v") + "-move";
      var moveData =
        children.length && this.getMoveData(children[0].context, moveClass);

      if (!moveData) {
        return;
      }
    },
    methods: {
      getMoveData: function getMoveData(context, moveClass) {
        var stylesheet = context.$options.style || {};
        return (
          stylesheet["@TRANSITION"] && stylesheet["@TRANSITION"][moveClass]
        );
      }
    }
  };
  var platformComponents = {
    Transition: Transition$1,
    TransitionGroup: TransitionGroup
  };
  var isReservedTag = makeMap(
    "template,script,style,element,content,slot,link,meta,svg,view," +
      "a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select," +
      "slider,slider-neighbor,indicator,trisition,trisition-group,canvas," +
      "list,cell,header,loading,loading-indicator,refresh,scrollable,scroller," +
      "video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",
    true
  );
  var canBeLeftOpenTag = makeMap(
    "web,spinner,switch,video,textarea,canvas," + "indicator,marquee,countdown",
    true
  );
  var isUnaryTag = makeMap("embed,img,image,input,link,meta", true);

  function mustUseProp() {}

  function isUnknownElement() {}

  function query(el, document) {
    var placeholder = new renderer.Comment("root");

    placeholder.hasAttribute = placeholder.removeAttribute = function() {};

    document.documentElement.appendChild(placeholder);
    return placeholder;
  }

  Vue$2.config.mustUseProp = mustUseProp;
  Vue$2.config.isReservedTag = isReservedTag;
  Vue$2.config.isUnknownElement = isUnknownElement;
  Vue$2.options.directives = platformDirectives;
  Vue$2.options.components = platformComponents;
  Vue$2.prototype.__patch__ = patch;

  Vue$2.prototype.$mount = function(el, hydrating) {
    return mountComponent(this, el && query(el, this.$document), hydrating);
  };

  exports.Vue = Vue$2;
}
