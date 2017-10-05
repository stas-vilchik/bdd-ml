{
  if (element.pre) {
    inVPre = false;
  }

  if (platformIsPreTag(element.tag)) {
    inPre = false;
  }
}
