{
  return e(
    "center",
    null,
    e(
      "table",
      {
        id: "hnmain",
        border: 0,
        cellPadding: 0,
        cellSpacing: 0,
        width: "85%",
        style: {
          "background-color": "#f6f6ef"
        }
      },
      e(
        "tbody",
        null,
        e(HeaderBar, null),
        e("tr", {
          height: 10
        }),
        e(StoryList, {
          stories
        })
      )
    )
  );
}
