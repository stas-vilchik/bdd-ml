{
  return [
    e(
      "tr",
      {
        className: "athing"
      },
      e(
        "td",
        {
          style: {
            verticalAlign: "top",
            textAlign: "right"
          },
          className: "title"
        },
        e(
          "span",
          {
            className: "rank"
          },
          `${rank}.`
        )
      ),
      e(
        "td",
        {
          className: "votelinks",
          style: {
            verticalAlign: "top"
          }
        },
        e(
          "center",
          null,
          e(
            "a",
            {
              href: "#"
            },
            e("div", {
              className: "votearrow",
              title: "upvote"
            })
          )
        )
      ),
      e(
        "td",
        {
          className: "title"
        },
        e(
          "a",
          {
            href: "#",
            className: "storylink"
          },
          story.title
        ),
        story.url
          ? e(
              "span",
              {
                className: "sitebit comhead"
              },
              " (",
              e(
                "a",
                {
                  href: "#"
                },
                getHostUrl(story.url)
              ),
              ")"
            )
          : null
      )
    ),
    e(
      "tr",
      null,
      e("td", {
        colSpan: 2
      }),
      e(
        "td",
        {
          className: "subtext"
        },
        e(
          "span",
          {
            className: "score"
          },
          `${story.score} points`
        ),
        " by ",
        e(
          "a",
          {
            href: "#",
            className: "hnuser"
          },
          story.by
        ),
        " ",
        e(
          "span",
          {
            className: "age"
          },
          e(
            "a",
            {
              href: "#"
            },
            timeAge(story.time)
          )
        ),
        " | ",
        e(
          "a",
          {
            href: "#"
          },
          "hide"
        ),
        " | ",
        e(
          "a",
          {
            href: "#"
          },
          `${story.descendants || 0} comments`
        )
      )
    ),
    e("tr", {
      style: {
        height: 5
      },
      className: "spacer"
    })
  ];
}
