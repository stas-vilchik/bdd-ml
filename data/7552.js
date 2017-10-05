{
  ancestorInfo = ancestorInfo || emptyAncestorInfo;
  var parentInfo = ancestorInfo.current;
  var parentTag = parentInfo && parentInfo.tag;
  return (
    isTagValidWithParent(tag, parentTag) &&
    !findInvalidAncestorForTag(tag, ancestorInfo)
  );
}
