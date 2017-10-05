{
  flags.load && console.log("loaded", url, elt);
  elt.__resource = resource;
  elt.__error = err;

  if (isImportLink(elt)) {
    var doc = this.documents[url];

    if (doc === undefined) {
      doc = err ? null : makeDocument(resource, redirectedUrl || url);

      if (doc) {
        doc.__importLink = elt;
        this.bootDocument(doc);
      }

      this.documents[url] = doc;
    }

    elt.import = doc;
  }

  parser.parseNext();
}
