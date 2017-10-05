{
  var args2 = args.slice();
  args2.push.apply(args2, arguments);
  return self.apply(scope, args2);
}
