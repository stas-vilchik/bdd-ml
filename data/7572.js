{
  if (!inst) {
    return [];
  }

  invariant(
    ReactTestUtils.isCompositeComponent(inst),
    "findAllInRenderedTree(...): instance must be a composite component"
  );
  var internalInstance = ReactInstanceMap.get(inst);

  if (internalInstance && typeof internalInstance.tag === "number") {
    return findAllInRenderedFiberTreeInternal(internalInstance, test);
  } else {
    return findAllInRenderedStackTreeInternal(internalInstance, test);
  }
}
