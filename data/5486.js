{
  t.plan(2);
  let msg = 'request to http://localhost:1234/ failed, reason: connect ECONNREFUSED 127.0.0.1:1234';

  try {
    await r2('http://localhost:1234').response;
  } catch (e) {
    t.type(e, 'Error');
    t.same(e.message, msg);
  }
}