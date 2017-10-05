{
  items.forEach(
    function(item, i) {
      this[i] = item;
    }.bind(this)
  );
  this.length = items.length;
}
