const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/todos.json");

/**
 * reads the todos from filesystem
 * @return {Array} - a list of todos or empty list
 */
const loadTodos = () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
};

/**
 * writes an array of todos into a file as JSON String
 * @param {Array} - a list of todos
 */
const saveTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
};

/**
 * returns all currently stored todos as array of javascript objects
 * @return {Array} - a list of todos or empty list
 */
exports.getTodos = () => loadTodos();

/**
 * return a single todo if the given id exists
 * @param {number} id - the id of the desired todo
 * @return {object} - the desired todo or null
 */
exports.getTodoById = (id) => {
    const todos = loadTodos();
    return todos.find(todo => todo.id == id) || null;
};

/**
 * creates a new todo items, adds it to the list of todos and stores everything on disk
 * @param {object} todo - the js object of the todo to be added
 * @return {object} - the newly created todo object
 */
exports.createTodo = (todo) => {
    const todos = loadTodos();
    const newTodo = { id: Date.now(), ...todo };
    todos.push(newTodo);
    saveTodos(todos);
    return newTodo;
};

/**
 * updates a todo with given id and new todo data and stores it on disk
 * @param {number} id - the id of the todo to be updated
 * @param {object} updatedTodo - the js object of the todo to be updated
 * @return {object} - the newly created todo object
 */
exports.updateTodo = (id, updatedTodo) => {
    let todos = loadTodos();
    const index = todos.findIndex(todo => todo.id == id);
    if (index === -1) return null;
    todos[index] = { ...todos[index], ...updatedTodo };
    saveTodos(todos);
    return todos[index];
};

/**
 * removes a todo with given id from the list and stores to disk
 * @param {number} id - the id of the todo to be deleted
 * @return {bool} - true if successful
 */
exports.deleteTodo = (id) => {
    let todos = loadTodos();
    const filteredTodos = todos.filter(todo => todo.id != id);
    if (filteredTodos.length === todos.length) return false;
    saveTodos(filteredTodos);
    return true;
};
