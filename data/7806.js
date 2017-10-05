{
  const slug = edge.node.fields.slug;

  if (slug === "/index.html") {
    createPage({
      path: "/",
      component: homeTemplate,
      context: {
        slug
      }
    });
  } else if (slug === "docs/installation.html") {
    createPage({
      path: slug,
      component: installationTemplate,
      context: {
        slug
      }
    });
  } else if (slug === "docs/error-decoder.html") {
  } else if (
    slug.includes("blog/") ||
    slug.includes("community/") ||
    slug.includes("contributing/") ||
    slug.includes("docs/") ||
    slug.includes("tutorial/")
  ) {
    let template;

    if (slug.includes("blog/")) {
      template = blogTemplate;
    } else if (slug.includes("community/")) {
      template = communityTemplate;
    } else if (slug.includes("contributing/") || slug.includes("docs/")) {
      template = docsTemplate;
    } else if (slug.includes("tutorial/")) {
      template = tutorialTemplate;
    }

    const createArticlePage = path =>
      createPage({
        path: path,
        component: template,
        context: {
          slug
        }
      });

    createArticlePage(slug);

    if (edge.node.fields.redirect) {
      let redirect = JSON.parse(edge.node.fields.redirect);

      if (!Array.isArray(redirect)) {
        redirect = [redirect];
      }

      redirect.forEach(fromPath =>
        createRedirect({
          fromPath: `/${fromPath}`,
          redirectInBrowser: true,
          toPath: `/${slug}`
        })
      );
    }
  }
}
