{
  ("use strict");

  var HTMLCollection = scope.wrappers.HTMLCollection;
  var NodeList = scope.wrappers.NodeList;
  var getTreeScope = scope.getTreeScope;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var wrap = scope.wrap;
  var originalDocumentQuerySelector = document.querySelector;
  var originalElementQuerySelector = document.documentElement.querySelector;
  var originalDocumentQuerySelectorAll = document.querySelectorAll;
  var originalElementQuerySelectorAll =
    document.documentElement.querySelectorAll;
  var originalDocumentGetElementsByTagName = document.getElementsByTagName;
  var originalElementGetElementsByTagName =
    document.documentElement.getElementsByTagName;
  var originalDocumentGetElementsByTagNameNS = document.getElementsByTagNameNS;
  var originalElementGetElementsByTagNameNS =
    document.documentElement.getElementsByTagNameNS;
  var OriginalElement = window.Element;
  var OriginalDocument = window.HTMLDocument || window.Document;

  function filterNodeList(list, index, result, deep) {
    var wrappedItem = null;
    var root = null;

    for (var i = 0, length = list.length; i < length; i++) {
      wrappedItem = wrap(list[i]);

      if (!deep && (root = getTreeScope(wrappedItem).root)) {
        if (root instanceof scope.wrappers.ShadowRoot) {
          continue;
        }
      }

      result[index++] = wrappedItem;
    }

    return index;
  }

  function shimSelector(selector) {
    return String(selector).replace(/\/deep\//g, " ");
  }

  function findOne(node, selector) {
    var m,
      el = node.firstElementChild;

    while (el) {
      if (el.matches(selector)) return el;
      m = findOne(el, selector);
      if (m) return m;
      el = el.nextElementSibling;
    }

    return null;
  }

  function matchesSelector(el, selector) {
    return el.matches(selector);
  }

  var XHTML_NS = "http://www.w3.org/1999/xhtml";

  function matchesTagName(el, localName, localNameLowerCase) {
    var ln = el.localName;
    return (
      ln === localName ||
      (ln === localNameLowerCase && el.namespaceURI === XHTML_NS)
    );
  }

  function matchesEveryThing() {
    return true;
  }

  function matchesLocalNameOnly(el, ns, localName) {
    return el.localName === localName;
  }

  function matchesNameSpace(el, ns) {
    return el.namespaceURI === ns;
  }

  function matchesLocalNameNS(el, ns, localName) {
    return el.namespaceURI === ns && el.localName === localName;
  }

  function findElements(node, index, result, p, arg0, arg1) {
    var el = node.firstElementChild;

    while (el) {
      if (p(el, arg0, arg1)) result[index++] = el;
      index = findElements(el, index, result, p, arg0, arg1);
      el = el.nextElementSibling;
    }

    return index;
  }

  function querySelectorAllFiltered(p, index, result, selector, deep) {
    var target = unsafeUnwrap(this);
    var list;
    var root = getTreeScope(this).root;

    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, selector, null);
    } else if (target instanceof OriginalElement) {
      list = originalElementQuerySelectorAll.call(target, selector);
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentQuerySelectorAll.call(target, selector);
    } else {
      return findElements(this, index, result, p, selector, null);
    }

    return filterNodeList(list, index, result, deep);
  }

  var SelectorsInterface = {
    querySelector: function(selector) {
      var shimmed = shimSelector(selector);
      var deep = shimmed !== selector;
      selector = shimmed;
      var target = unsafeUnwrap(this);
      var wrappedItem;
      var root = getTreeScope(this).root;

      if (root instanceof scope.wrappers.ShadowRoot) {
        return findOne(this, selector);
      } else if (target instanceof OriginalElement) {
        wrappedItem = wrap(originalElementQuerySelector.call(target, selector));
      } else if (target instanceof OriginalDocument) {
        wrappedItem = wrap(
          originalDocumentQuerySelector.call(target, selector)
        );
      } else {
        return findOne(this, selector);
      }

      if (!wrappedItem) {
        return wrappedItem;
      } else if (!deep && (root = getTreeScope(wrappedItem).root)) {
        if (root instanceof scope.wrappers.ShadowRoot) {
          return findOne(this, selector);
        }
      }

      return wrappedItem;
    },
    querySelectorAll: function(selector) {
      var shimmed = shimSelector(selector);
      var deep = shimmed !== selector;
      selector = shimmed;
      var result = new NodeList();
      result.length = querySelectorAllFiltered.call(
        this,
        matchesSelector,
        0,
        result,
        selector,
        deep
      );
      return result;
    }
  };

  function getElementsByTagNameFiltered(
    p,
    index,
    result,
    localName,
    lowercase
  ) {
    var target = unsafeUnwrap(this);
    var list;
    var root = getTreeScope(this).root;

    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, localName, lowercase);
    } else if (target instanceof OriginalElement) {
      list = originalElementGetElementsByTagName.call(
        target,
        localName,
        lowercase
      );
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentGetElementsByTagName.call(
        target,
        localName,
        lowercase
      );
    } else {
      return findElements(this, index, result, p, localName, lowercase);
    }

    return filterNodeList(list, index, result, false);
  }

  function getElementsByTagNameNSFiltered(p, index, result, ns, localName) {
    var target = unsafeUnwrap(this);
    var list;
    var root = getTreeScope(this).root;

    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, ns, localName);
    } else if (target instanceof OriginalElement) {
      list = originalElementGetElementsByTagNameNS.call(target, ns, localName);
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentGetElementsByTagNameNS.call(target, ns, localName);
    } else {
      return findElements(this, index, result, p, ns, localName);
    }

    return filterNodeList(list, index, result, false);
  }

  var GetElementsByInterface = {
    getElementsByTagName: function(localName) {
      var result = new HTMLCollection();
      var match = localName === "*" ? matchesEveryThing : matchesTagName;
      result.length = getElementsByTagNameFiltered.call(
        this,
        match,
        0,
        result,
        localName,
        localName.toLowerCase()
      );
      return result;
    },
    getElementsByClassName: function(className) {
      return this.querySelectorAll("." + className);
    },
    getElementsByTagNameNS: function(ns, localName) {
      var result = new HTMLCollection();
      var match = null;

      if (ns === "*") {
        match = localName === "*" ? matchesEveryThing : matchesLocalNameOnly;
      } else {
        match = localName === "*" ? matchesNameSpace : matchesLocalNameNS;
      }

      result.length = getElementsByTagNameNSFiltered.call(
        this,
        match,
        0,
        result,
        ns || null,
        localName
      );
      return result;
    }
  };
  scope.GetElementsByInterface = GetElementsByInterface;
  scope.SelectorsInterface = SelectorsInterface;
}
