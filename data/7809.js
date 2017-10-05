{
  const { createNodeField } = boundActionCreators;

  switch (node.internal.type) {
    case "MarkdownRemark":
      const { permalink, redirect_from } = node.frontmatter;
      const { relativePath } = getNode(node.parent);
      let slug = permalink;

      if (!slug) {
        if (relativePath.includes("_posts")) {
          const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
          const year = match[1];
          const month = match[2];
          const day = match[3];
          const filename = match[4];
          slug = `/blog/${year}/${month}/${day}/${filename}.html`;
          const date = new Date(year, month - 1, day);
          createNodeField({
            node,
            name: "date",
            value: date.toJSON()
          });
        }
      }

      if (!slug) {
        slug = `/${relativePath.replace(".md", ".html")}`;
        console.warn(
          `Warning: No slug found for "${relativePath}". Falling back to default "${slug}".`
        );
      }

      createNodeField({
        node,
        name: "slug",
        value: slug
      });
      createNodeField({
        node,
        name: "path",
        value: relativePath
      });
      createNodeField({
        node,
        name: "redirect",
        value: redirect_from ? JSON.stringify(redirect_from) : ""
      });
      return;
  }
}
