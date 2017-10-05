{
  var factory = node.asyncFactory;

  var resolve = function(comp) {
    if (comp.__esModule && comp.default) {
      comp = comp.default;
    }

    var ref = node.asyncMeta;
    var data = ref.data;
    var children = ref.children;
    var tag = ref.tag;
    var nodeContext = node.asyncMeta.context;
    var resolvedNode = createComponent(comp, data, nodeContext, children, tag);

    if (resolvedNode) {
      renderComponent(resolvedNode, isRoot, context);
    } else {
      reject();
    }
  };

  var reject = function(err) {
    console.error(
      "[vue-server-renderer] error when rendering async component:\n"
    );

    if (err) {
      console.error(err.stack);
    }

    context.write("<!--" + node.text + "-->", context.next);
  };

  if (factory.resolved) {
    resolve(factory.resolved);
    return;
  }

  var res;

  try {
    res = factory(resolve, reject);
  } catch (e) {
    reject(e);
  }

  if (res) {
    if (typeof res.then === "function") {
      res.then(resolve, reject).catch(reject);
    } else {
      var comp = res.component;

      if (comp && typeof comp.then === "function") {
        comp.then(resolve, reject).catch(reject);
      }
    }
  }
}
