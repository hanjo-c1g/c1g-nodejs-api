const http = require("http");
const url = require("url");
const todoController = require("./controllers/todoController");
const helloController = require("./controllers/helloController");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.pathname.split("/")[2];

    if (parsedUrl.pathname === "/hello" && req.method === "GET") {
        helloController.sayHelloGet(req, res, parsedUrl.query);
    } else if (parsedUrl.pathname === "/hello" && req.method === "POST") {
        helloController.sayHelloPost(req, res);
    } else if (parsedUrl.pathname === "/todos" && req.method === "GET") {
        todoController.getTodos(req, res);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "GET") {
        todoController.getTodoById(req, res, id);
    } else if (parsedUrl.pathname === "/todos" && req.method === "POST") {
        todoController.createTodo(req, res);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "PUT") {
        todoController.updateTodo(req, res, id);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "DELETE") {
        todoController.deleteTodo(req, res, id);
    } else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server läuft auf http://localhost:3000");
});
