{
  var targetState = {};
  var startState = stylesheet[startClass];
  var endState = stylesheet[endClass];
  var activeState = stylesheet[activeClass];

  if (startState) {
    for (var key in startState) {
      targetState[key] = el.style[key];

      if (
        process.env.NODE_ENV !== "production" &&
        targetState[key] == null &&
        (!activeState || activeState[key] == null) &&
        (!endState || endState[key] == null)
      ) {
        warn(
          'transition property "' +
            key +
            '" is declared in enter starting class (.' +
            startClass +
            "), " +
            "but not declared anywhere in enter ending class (." +
            endClass +
            "), " +
            "enter active cass (." +
            activeClass +
            ") or the element's default styling. " +
            "Note in Weex, CSS properties need explicit values to be transitionable."
        );
      }
    }
  }

  if (activeState) {
    for (var key$1 in activeState) {
      if (key$1.indexOf("transition") !== 0) {
        targetState[key$1] = activeState[key$1];
      }
    }
  }

  if (endState) {
    extend(targetState, endState);
  }

  return targetState;
}
