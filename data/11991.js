{
  if (element.pre) {
    inVPre = false;
  }

  if (platformIsPreTag(element.tag)) {
    inPre = false;
  }

  for (var i = 0; i < postTransforms.length; i++) {
    postTransforms[i](element, options);
  }
}
