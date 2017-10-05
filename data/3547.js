{
  if (isTest) {
    return function*(next) {
      yield next;
    };
  }

  let readyPromise;

  if (isProd) {
    const bundle = require("../dist/vue-ssr-server-bundle.json");

    const clientManifest = require("../dist/vue-ssr-client-manifest.json");

    renderer = createRenderer(bundle, {
      clientManifest
    });
  } else {
    readyPromise = require("../build/setup-dev-server")(
      app,
      (bundle, options) => {
        renderer = createRenderer(bundle, options);
      }
    );
  }

  const getHTML = (context, s) =>
    new Promise((resolve, reject) => {
      const cb = (error, html) => {
        if (error) {
          return reject(error);
        }

        resolve(html);

        if (!isProd) {
          this.log.info(`whole request: ${Date.now() - s}ms`);
        }
      };

      if (isProd) {
        renderer.renderToString(context, cb);
      } else {
        readyPromise.then(() => {
          renderer.renderToString(context, cb);
        });
      }
    });

  return function*() {
    const s = Date.now();
    const context = {
      url: this.url
    };

    const handleError = err => {
      if (err.code === 404) {
        this.status = 404;
        this.body = "404 | Page Not Found";
      } else if (err.code === 401) {
        this.status = 302;
        this.redirect("/login");
      } else {
        this.status = 500;
        this.body = "500 | Internal Server Error";
        this.log.error(`error during render : ${this.url}`);
        this.log.error(err.stack);
      }
    };

    this.type = "html";
    cookie.setRawCookie(this.header.cookie);

    try {
      this.body = yield getHTML(context, s);
    } catch (error) {
      handleError(error);
    }
  };
}
