{
  const targetNode = ReactDOMComponentTree.getNodeFromInstance(targetInst);

  if (inputValueTracking.updateValueIfChanged(targetNode)) {
    return targetInst;
  }
}
