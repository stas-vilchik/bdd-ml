{
  if (!this.editedTodo) {
    return;
  }

  this.editedTodo = null;
  todo.title = todo.title.trim();

  if (!todo.title) {
    this.removeTodo(todo);
  }
}
