{
  invariant(
    !views.has(reactTag),
    "Created two native views with tag %s",
    reactTag
  );
  views.set(reactTag, {
    children: [],
    parent: null,
    props: props,
    viewName: viewName
  });
}
