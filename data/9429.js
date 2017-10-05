{
  e(t.data.pendingInsert) &&
    (n.push.apply(n, t.data.pendingInsert), (t.data.pendingInsert = null)),
    (t.elm = t.componentInstance.$el),
    h(t) ? (m(t, n), y(t)) : (Be(t), n.push(t));
}
