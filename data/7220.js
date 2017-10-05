{
  return (
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function(id) {
      clearTimeout(id);
    }
  );
}
