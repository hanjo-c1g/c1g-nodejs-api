const todoService = require("../services/todoService");

exports.getTodos = (req, res) => {
    // TODO: Hole alle To-Dos und sende sie als JSON-String zurück
};

exports.getTodoById = (req, res, id) => {
    // TODO: Hole das To-Do mit der passenden ID aus dem Service

    // TODO: Falls kein To-Do gefunden wurde, sende eine 404-Fehlermeldung zurück

    // TODO: Falls das To-Do existiert, sende es als JSON zurück
};

exports.createTodo = (req, res) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        try {
            // TODO: JSON-Daten parsen

            // TODO: To-Do in der Liste speichern

            // TODO: Erfolgreiche Antwort senden
        } catch (error) {
            res.end("Invalid Request");
        }
    });
};

exports.updateTodo = (req, res, id) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        try {
            // TODO: JSON-Daten parsen

            // TODO: To-Do aktualisieren

            // TODO: Falls kein To-Do gefunden wurde, sende eine 404-Fehlermeldung zurück, sonst gib das aktualisierte To-Do zurück
        } catch (error) {
            res.end("Invalid Request");
        }
    });
};

exports.deleteTodo = (req, res, id) => {
    // TODO: Lösche das To-Do mit der übergebenen ID

    // TODO: Falls kein To-Do gefunden wurde, sende eine 404-Fehlermeldung zurück, sonst ein leeres JSON "{}"
};
