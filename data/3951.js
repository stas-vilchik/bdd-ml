{
  let action;
  let current;
  sequence =
    typeof value === "object" ? value : sequence.concat(value.split("|"));
  timedAction(
    function() {
      current = sequence.shift();
      action = getAction(current);
      value = getValue(current);

      switch (action) {
        case "countdown":
          value = parseInt(value, 10) || 10;
          value = value > 0 ? value : 10;
          timedAction(
            function(index) {
              if (index === 0) {
                if (sequence.length === 0) {
                  S.Shape.switchShape(S.ShapeBuilder.letter(""));
                } else {
                  performAction(sequence);
                }
              } else {
                S.Shape.switchShape(S.ShapeBuilder.letter(index), true);
              }
            },
            1000,
            value,
            true
          );
          break;

        case "rectangle":
          value = value && value.split("x");
          value =
            value && value.length === 2
              ? value
              : [maxShapeSize, maxShapeSize / 2];
          S.Shape.switchShape(
            S.ShapeBuilder.rectangle(
              Math.min(maxShapeSize, parseInt(value[0], 10)),
              Math.min(maxShapeSize, parseInt(value[1], 10))
            )
          );
          break;

        case "circle":
          value = parseInt(value, 10) || maxShapeSize;
          value = Math.min(value, maxShapeSize);
          S.Shape.switchShape(S.ShapeBuilder.circle(value));
          break;

        case "time":
          let t = formatTime(new Date());

          if (sequence.length > 0) {
            S.Shape.switchShape(S.ShapeBuilder.letter(t));
          } else {
            timedAction(function() {
              t = formatTime(new Date());

              if (t !== time) {
                time = t;
                S.Shape.switchShape(S.ShapeBuilder.letter(time));
              }
            }, 1000);
          }

          break;

        case "icon":
          S.ShapeBuilder.imageFile(value, function(obj) {
            S.Shape.switchShape(obj);
          });
          break;

        default:
          S.Shape.switchShape(
            S.ShapeBuilder.letter(current[0] === cmd ? "What?" : current)
          );
      }
    },
    2000,
    sequence.length
  );
}
