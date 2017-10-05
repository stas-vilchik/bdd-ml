{
  if (preserveVersionHeader && comment.pos === 0 && comment.col === 0) {
    if (headerSanityCheck && comment.value.indexOf(headerSanityCheck) === -1) {
      throw new Error(
        "Expected the first comment to be the file header but got: " +
          comment.value
      );
    }

    return true;
  }

  return !removeComments;
}
