{
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
}
