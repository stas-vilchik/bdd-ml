{
  var childOwner = childInstance && childInstance._currentElement._owner;
  var ancestorOwner =
    ancestorInstance && ancestorInstance._currentElement._owner;
  var childOwners = findOwnerStack(childOwner);
  var ancestorOwners = findOwnerStack(ancestorOwner);
  var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
  var i;
  var deepestCommon = -1;

  for (i = 0; i < minStackLen; i++) {
    if (childOwners[i] === ancestorOwners[i]) {
      deepestCommon = i;
    } else {
      break;
    }
  }

  var UNKNOWN = "(unknown)";
  var childOwnerNames = childOwners
    .slice(deepestCommon + 1)
    .map(inst => getComponentName(inst) || UNKNOWN);
  var ancestorOwnerNames = ancestorOwners
    .slice(deepestCommon + 1)
    .map(inst => getComponentName(inst) || UNKNOWN);
  var ownerInfo = []
    .concat(
      deepestCommon !== -1
        ? getComponentName(childOwners[deepestCommon]) || UNKNOWN
        : [],
      ancestorOwnerNames,
      ancestorTag,
      isParent ? [] : ["..."],
      childOwnerNames,
      childTag
    )
    .join(" > ");
  return ownerInfo;
}
