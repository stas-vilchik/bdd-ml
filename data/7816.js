{
  app.databases = Object.freeze(ENV.generateData().toArray());
  Monitoring.renderRate.ping();
  setTimeout(loadSamples, ENV.timeout);
}
