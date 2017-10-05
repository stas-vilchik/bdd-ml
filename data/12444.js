{
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
          callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
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
