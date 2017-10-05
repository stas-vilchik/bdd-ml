{
  return e(
    "tr",
    null,
    e(
      "td",
      null,
      e(
        "table",
        {
          cellPadding: 0,
          cellSpacing: 0,
          classList: "itemlist"
        },
        e(
          "tbody",
          null,
          stories.map((story, i) =>
            e(Story, {
              story,
              rank: ++i,
              key: story.id
            })
          )
        )
      )
    )
  );
}
