{
  const watcher = jest.fn(root => {
    const EventEmitter = require("events").EventEmitter;

    mockEmitters[root] = new EventEmitter();
    mockEmitters[root].close = jest.fn(callback => callback());
    setTimeout(() => mockEmitters[root].emit("ready"), 0);
    return mockEmitters[root];
  });
  return {
    NodeWatcher: watcher,
    WatchmanWatcher: watcher
  };
}
