{
  autoCreateRoot(parentTag);
  invariant(
    views.get(parentTag).children.length === 0,
    "Calling .setChildren on nonempty view %s",
    parentTag
  );
  reactTags.forEach((tag, i) => {
    insertSubviewAtIndex(parentTag, tag, i);
  });
}
