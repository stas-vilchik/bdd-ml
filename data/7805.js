{
  const {
    createPage,
    createRedirect
  } = boundActionCreators;
  const blogTemplate = resolve('./src/templates/blog.js');
  const communityTemplate = resolve('./src/templates/community.js');
  const docsTemplate = resolve('./src/templates/docs.js');
  const tutorialTemplate = resolve('./src/templates/tutorial.js');
  const homeTemplate = resolve('./src/templates/home.js');
  const installationTemplate = resolve('./src/templates/installation.js');
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              redirect
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;

    if (slug === '/index.html') {
      createPage({
        path: '/',
        component: homeTemplate,
        context: {
          slug
        }
      });
    } else if (slug === 'docs/installation.html') {
      createPage({
        path: slug,
        component: installationTemplate,
        context: {
          slug
        }
      });
    } else if (slug === 'docs/error-decoder.html') {} else if (slug.includes('blog/') || slug.includes('community/') || slug.includes('contributing/') || slug.includes('docs/') || slug.includes('tutorial/')) {
      let template;

      if (slug.includes('blog/')) {
        template = blogTemplate;
      } else if (slug.includes('community/')) {
        template = communityTemplate;
      } else if (slug.includes('contributing/') || slug.includes('docs/')) {
        template = docsTemplate;
      } else if (slug.includes('tutorial/')) {
        template = tutorialTemplate;
      }

      const createArticlePage = path => createPage({
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

        redirect.forEach(fromPath => createRedirect({
          fromPath: `/${fromPath}`,
          redirectInBrowser: true,
          toPath: `/${slug}`
        }));
      }
    }
  });
  const newestBlogEntry = await graphql(`
    {
      allMarkdownRemark(
        limit: 1,
        filter: { id: { regex: "/_posts/" } }
        sort: { fields: [fields___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const newestBlogNode = newestBlogEntry.data.allMarkdownRemark.edges[0].node;
  createRedirect({
    fromPath: '/blog/',
    redirectInBrowser: true,
    toPath: newestBlogNode.fields.slug
  });
}