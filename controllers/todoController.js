const todoService = require("../services/todoService");

exports.getTodos = (req, res) => {
    // TODO: Hole alle To-Dos und sende sie als JSON-String zurück
    res.end(JSON.stringify(todoService.getTodos()));
};

exports.createTodo = (req, res) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        try {
            // TODO: JSON-Daten parsen
            const newTodo = JSON.parse(body);

            // TODO: To-Do in der Liste speichern
            const todo = todoService.createTodo(newTodo);

            // TODO: Erfolgreiche Antwort senden
            res.end(JSON.stringify(todo));
        } catch (error) {
            res.end("Invalid JSON");
        }
    });
};

exports.updateTodo = (req, res, id) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        try {
            // TODO: JSON-Daten parsen
            const updatedTodo = JSON.parse(body);

            // TODO: To-Do aktualisieren
            const todo = todoService.updateTodo(id, updatedTodo);

            if (!todo) {
                res.end("To-Do not found");
            } else {
                res.end(JSON.stringify(todo));
            }
        } catch (error) {
            res.end("Invalid JSON");
        }
    });
};

exports.deleteTodo = (req, res, id) => {
    // TODO: Lösche das To-Do mit der übergebenen ID
    const success = todoService.deleteTodo(id);

    if (!success) {
        res.end("To-Do not found");
    } else {
        res.end("To-Do deleted");
    }
};
