{
  autoCreateRoot(parentTag);
  invariant(
    moveFromIndices.length === moveToIndices.length,
    "Mismatched move indices %s and %s",
    moveFromIndices,
    moveToIndices
  );
  invariant(
    addChildReactTags.length === addAtIndices.length,
    "Mismatched add indices %s and %s",
    addChildReactTags,
    addAtIndices
  );
  const parentInfo = views.get(parentTag);
  const permanentlyRemovedChildren = removeAtIndices.map(
    index => parentInfo.children[index]
  );
  const temporarilyRemovedChildren = moveFromIndices.map(
    index => parentInfo.children[index]
  );
  permanentlyRemovedChildren.forEach(tag => removeChild(parentTag, tag));
  temporarilyRemovedChildren.forEach(tag => removeChild(parentTag, tag));
  permanentlyRemovedChildren.forEach(tag => {
    views.delete(tag);
  });
  const indicesToInsert = [];
  temporarilyRemovedChildren.forEach((tag, i) => {
    indicesToInsert.push([moveToIndices[i], temporarilyRemovedChildren[i]]);
  });
  addChildReactTags.forEach((tag, i) => {
    indicesToInsert.push([addAtIndices[i], addChildReactTags[i]]);
  });
  indicesToInsert.sort((a, b) => a[0] - b[0]);

  for (const [i, tag] of indicesToInsert) {
    insertSubviewAtIndex(parentTag, tag, i);
  }
}
