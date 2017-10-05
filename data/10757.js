{
  var value = this.newTodo && this.newTodo.trim();

  if (!value) {
    return;
  }

  this.todos.push({
    id: todoStorage.uid++,
    title: value,
    completed: false
  });
  this.newTodo = "";
}
