{
  var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  todos.forEach(function(todo, index) {
    todo.id = index;
  });
  todoStorage.uid = todos.length;
  return todos;
}
