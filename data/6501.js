{
  ("use strict");

  var setEndOfMicrotask = scope.setEndOfMicrotask;
  var wrapIfNeeded = scope.wrapIfNeeded;
  var wrappers = scope.wrappers;
  var registrationsTable = new WeakMap();
  var globalMutationObservers = [];
  var isScheduled = false;

  function scheduleCallback(observer) {
    if (observer.scheduled_) return;
    observer.scheduled_ = true;
    globalMutationObservers.push(observer);
    if (isScheduled) return;
    setEndOfMicrotask(notifyObservers);
    isScheduled = true;
  }

  function notifyObservers() {
    isScheduled = false;

    while (globalMutationObservers.length) {
      var notifyList = globalMutationObservers;
      globalMutationObservers = [];
      notifyList.sort(function(x, y) {
        return x.uid_ - y.uid_;
      });

      for (var i = 0; i < notifyList.length; i++) {
        var mo = notifyList[i];
        mo.scheduled_ = false;
        var queue = mo.takeRecords();
        removeTransientObserversFor(mo);

        if (queue.length) {
          mo.callback_(queue, mo);
        }
      }
    }
  }

  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = new wrappers.NodeList();
    this.removedNodes = new wrappers.NodeList();
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }

  function registerTransientObservers(ancestor, node) {
    for (; ancestor; ancestor = ancestor.parentNode) {
      var registrations = registrationsTable.get(ancestor);
      if (!registrations) continue;

      for (var i = 0; i < registrations.length; i++) {
        var registration = registrations[i];
        if (registration.options.subtree)
          registration.addTransientObserver(node);
      }
    }
  }

  function removeTransientObserversFor(observer) {
    for (var i = 0; i < observer.nodes_.length; i++) {
      var node = observer.nodes_[i];
      var registrations = registrationsTable.get(node);
      if (!registrations) return;

      for (var j = 0; j < registrations.length; j++) {
        var registration = registrations[j];
        if (registration.observer === observer)
          registration.removeTransientObservers();
      }
    }
  }

  function enqueueMutation(target, type, data) {
    var interestedObservers = Object.create(null);
    var associatedStrings = Object.create(null);

    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);
      if (!registrations) continue;

      for (var j = 0; j < registrations.length; j++) {
        var registration = registrations[j];
        var options = registration.options;
        if (node !== target && !options.subtree) continue;
        if (type === "attributes" && !options.attributes) continue;

        if (
          type === "attributes" &&
          options.attributeFilter &&
          (data.namespace !== null ||
            options.attributeFilter.indexOf(data.name) === -1)
        ) {
          continue;
        }

        if (type === "characterData" && !options.characterData) continue;
        if (type === "childList" && !options.childList) continue;
        var observer = registration.observer;
        interestedObservers[observer.uid_] = observer;

        if (
          (type === "attributes" && options.attributeOldValue) ||
          (type === "characterData" && options.characterDataOldValue)
        ) {
          associatedStrings[observer.uid_] = data.oldValue;
        }
      }
    }

    for (var uid in interestedObservers) {
      var observer = interestedObservers[uid];
      var record = new MutationRecord(type, target);

      if ("name" in data && "namespace" in data) {
        record.attributeName = data.name;
        record.attributeNamespace = data.namespace;
      }

      if (data.addedNodes) record.addedNodes = data.addedNodes;
      if (data.removedNodes) record.removedNodes = data.removedNodes;
      if (data.previousSibling) record.previousSibling = data.previousSibling;
      if (data.nextSibling) record.nextSibling = data.nextSibling;
      if (associatedStrings[uid] !== undefined)
        record.oldValue = associatedStrings[uid];
      scheduleCallback(observer);
      observer.records_.push(record);
    }
  }

  var slice = Array.prototype.slice;

  function MutationObserverOptions(options) {
    this.childList = !!options.childList;
    this.subtree = !!options.subtree;

    if (
      !("attributes" in options) &&
      ("attributeOldValue" in options || "attributeFilter" in options)
    ) {
      this.attributes = true;
    } else {
      this.attributes = !!options.attributes;
    }

    if ("characterDataOldValue" in options && !("characterData" in options))
      this.characterData = true;
    else this.characterData = !!options.characterData;

    if (
      (!this.attributes &&
        (options.attributeOldValue || "attributeFilter" in options)) ||
      (!this.characterData && options.characterDataOldValue)
    ) {
      throw new TypeError();
    }

    this.characterData = !!options.characterData;
    this.attributeOldValue = !!options.attributeOldValue;
    this.characterDataOldValue = !!options.characterDataOldValue;

    if ("attributeFilter" in options) {
      if (
        options.attributeFilter == null ||
        typeof options.attributeFilter !== "object"
      ) {
        throw new TypeError();
      }

      this.attributeFilter = slice.call(options.attributeFilter);
    } else {
      this.attributeFilter = null;
    }
  }

  var uidCounter = 0;

  function MutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
    this.scheduled_ = false;
  }

  MutationObserver.prototype = {
    constructor: MutationObserver,
    observe: function(target, options) {
      target = wrapIfNeeded(target);
      var newOptions = new MutationObserverOptions(options);
      var registration;
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, (registrations = []));

      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeTransientObservers();
          registration.options = newOptions;
        }
      }

      if (!registration) {
        registration = new Registration(this, target, newOptions);
        registrations.push(registration);
        this.nodes_.push(target);
      }
    },
    disconnect: function() {
      this.nodes_.forEach(function(node) {
        var registrations = registrationsTable.get(node);

        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];

          if (registration.observer === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords: function() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };

  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }

  Registration.prototype = {
    addTransientObserver: function(node) {
      if (node === this.target) return;
      scheduleCallback(this.observer);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, (registrations = []));
      registrations.push(this);
    },
    removeTransientObservers: function() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];

      for (var i = 0; i < transientObservedNodes.length; i++) {
        var node = transientObservedNodes[i];
        var registrations = registrationsTable.get(node);

        for (var j = 0; j < registrations.length; j++) {
          if (registrations[j] === this) {
            registrations.splice(j, 1);
            break;
          }
        }
      }
    }
  };
  scope.enqueueMutation = enqueueMutation;
  scope.registerTransientObservers = registerTransientObservers;
  scope.wrappers.MutationObserver = MutationObserver;
  scope.wrappers.MutationRecord = MutationRecord;
}
