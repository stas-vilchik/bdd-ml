{
  if (!views.has(tag) && ReactNativeTagHandles.reactTagIsNativeTopRootID(tag)) {
    roots.push(tag);
    views.set(tag, {
      children: [],
      parent: null,
      props: {},
      viewName: "<native root>"
    });
  }
}
