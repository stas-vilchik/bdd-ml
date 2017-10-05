{
  context["render" + type] = renderer["render" + type].bind(renderer, context);
}
