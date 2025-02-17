# 📝 Einfache To-Do API mit Node.js

Dieses Repository enthält eine **minimalistische REST-API für eine To-Do-Liste**.  
Die API ist in **plain Node.js** implementiert, ohne zusätzliche Frameworks wie Express.  
Die Teilnehmer sollen CRUD-Operationen für To-Dos vervollständigen.

---

## 📚 Projektstruktur

```
todo-api/
├── index.js               # Hauptserver mit Routing
├── controllers/           # Enthält die API-Logik
│   ├── todoController.js  # CRUD-Operationen für To-Dos (mit TODOs)
│   ├── helloController.js # Demo-Controller für GET und POST
│   ├── swaggerController.js # API-Dokumentation mit Swagger UI
├── services/              # Enthält die Business-Logik
│   ├── todoService.js     # Alle Methoden zur Datenverarbeitung (fertig implementiert)
├── data/                  # Enthält die gespeicherten To-Dos und API-Dokumentation
│   ├── todos.json         # To-Do-Daten im JSON-Format
│   ├── swagger.json       # OpenAPI-Spezifikation für Swagger UI
├── package.json           # Projekt-Metadaten & Start-Skripte
```

---

## 🛠️ Server starten

### Voraussetzungen
- **Node.js** (mindestens Version 18)
- **Terminal oder Eingabeaufforderung**

### Installieren der Abhängigkeiten
```bash
npm install
```

### Starten des Servers

Der Server kann im Entwicklermodus Änderungen gestartet werden, in diesem Modus werden Änderungen im Quellcode direkt übernommen:
```bash
npm run dev # Startet den Server bei Änderungen neu
```

Um den Server zu starten.
```bash
npm start # Startet den Server
```

Der Server läuft nun auf **http://localhost:3000**.

---

## 🛠️ cURL-Beispiele für die To-Do API

### **Alle To-Dos abrufen**
```bash
curl -X GET http://localhost:3000/todos
```

### **Ein einzelnes To-Do abrufen**
```bash
curl -X GET http://localhost:3000/todos/1
```

### **Neues To-Do erstellen**
```bash
curl -X POST http://localhost:3000/todos -d '{"title": "Node.js lernen", "done": false}'
```

### **Ein To-Do aktualisieren**
```bash
curl -X PUT http://localhost:3000/todos/1 -d '{"done": true}'
```

### **Ein To-Do löschen**
```bash
curl -X DELETE http://localhost:3000/todos/1
```

---

## 🛠️ Arbeiten mit Swagger UI

Swagger UI ist in das Projekt integriert, um die API-Dokumentation bereitzustellen und Endpunkte direkt im Browser zu testen.

### **Swagger UI aufrufen**

Nach dem Start des Servers ist Swagger UI unter folgender URL erreichbar:

```
http://localhost:3000/swagger
```

Hier können alle Endpunkte getestet und ihre Strukturen eingesehen werden.

---

## 🎯 Aufgabenstellung
**Implementiere die fehlenden Methoden in `todoController.js`**:
1. **GET /todos** → Hole alle To-Dos
1. **GET /todos/:id** → Hole ein einzelnes To-Do anhand der ID
2. **POST /todos** → Speichere ein neues To-Do
3. **PUT /todos/:id** → Aktualisiere ein bestehendes To-Do
4. **DELETE /todos/:id** → Lösche ein To-Do

Hinweise:
- Nutze die fertigen Funktionen aus `todoService.js`.
- Fehlermeldungen zurückgeben, falls eine ID nicht existiert.
- Teste die funktion deines Codes mit curl
- Eine Lösungsvariante findest du im brancht `solution`

---

## 🔧 Cheatsheet fürs Coden

### **JSON-Daten an den Client senden**
```javascript
res.end(JSON.stringify(data));
```

### **Fehlermeldung mit HTTP-Statuscode senden**
```javascript
res.writeHead(400);
res.end("Fehler: Ungültige Anfrage");
```

### **Daten aus dem Request-Body lesen**
```javascript
let body = "";
req.on("data", chunk => { body += chunk; });
req.on("end", () => {
    const data = JSON.parse(body);
    console.log(data);
});
```

### **Daten aus der URL (Query-Parameter) extrahieren**
```javascript
const url = require("url");
const parsedUrl = url.parse(req.url, true);
const name = parsedUrl.query.name;
```

### **ID aus der URL extrahieren**
```javascript
const id = req.url.split("/")[2];
```

### **Wichtige HTTP-Statuscodes**
- **200 OK** – Erfolgreiche Anfrage
- **201 Created** – Erfolgreich erstellt (z. B. neues To-Do)
- **400 Bad Request** – Fehlerhafte Anfrage (ungültige Daten)
- **404 Not Found** – Ressource nicht gefunden
- **500 Internal Server Error** – Serverfehler

---

Viel Spaß beim Programmieren! 🚀

