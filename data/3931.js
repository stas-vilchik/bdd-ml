{
  S.Drawing.init(ele);
  S.ShapeBuilder.init();
  S.UI.init();
  S.UI.simulate(text);
  S.Drawing.loop(function() {
    S.Shape.render();
  });
}
