{
  var i = children.length;

  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (process.env.NODE_ENV !== "production" && children[i].text !== " ") {
        warn(
          'text "' +
            children[i].text.trim() +
            '" between v-if and v-else(-if) ' +
            "will be ignored."
        );
      }

      children.pop();
    }
  }
}
