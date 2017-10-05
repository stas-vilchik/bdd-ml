{
  var name, cur, old, event;
  var toAdd = [];
  var hasModifier = false;

  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (!event.plain) {
      hasModifier = true;
    }

    if (isUndef(cur)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          'Invalid handler for event "' + event.name + '": got ' + String(cur),
          vm
        );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }

      event.handler = cur;
      toAdd.push(event);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  if (toAdd.length) {
    if (hasModifier) {
      toAdd.sort(prioritizePlainEvents);
    }

    for (var i = 0; i < toAdd.length; i++) {
      var event$1 = toAdd[i];
      add(
        event$1.name,
        event$1.handler,
        event$1.once,
        event$1.capture,
        event$1.passive
      );
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
