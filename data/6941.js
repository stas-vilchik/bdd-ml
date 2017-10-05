{
  ("use strict");

  var unwrap = scope.unwrap;
  var OriginalDataTransfer = window.DataTransfer || window.Clipboard;
  var OriginalDataTransferSetDragImage =
    OriginalDataTransfer.prototype.setDragImage;

  if (OriginalDataTransferSetDragImage) {
    OriginalDataTransfer.prototype.setDragImage = function(image, x, y) {
      OriginalDataTransferSetDragImage.call(this, unwrap(image), x, y);
    };
  }
}
