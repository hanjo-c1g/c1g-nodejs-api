const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/todos.json");

const loadTodos = () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
};

const saveTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
};

exports.getTodos = () => loadTodos();

exports.createTodo = (todo) => {
    const todos = loadTodos();
    const newTodo = { id: Date.now(), ...todo };
    todos.push(newTodo);
    saveTodos(todos);
    return newTodo;
};

exports.updateTodo = (id, updatedTodo) => {
    let todos = loadTodos();
    const index = todos.findIndex(todo => todo.id == id);
    if (index === -1) return null;
    todos[index] = { ...todos[index], ...updatedTodo };
    saveTodos(todos);
    return todos[index];
};

exports.deleteTodo = (id) => {
    let todos = loadTodos();
    const filteredTodos = todos.filter(todo => todo.id != id);
    if (filteredTodos.length === todos.length) return false;
    saveTodos(filteredTodos);
    return true;
};
