exports.sayHelloGet = (req, res, query) => {
    const name = query.name;

    if (!name) {
        res.writeHead(400);
        res.end("Fehler: Name ist erforderlich");
        return;
    }

    res.end(`Hallo, ${name}!`);
};

exports.sayHelloPost = (req, res) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        try {
            const data = JSON.parse(body);
            const name = data.name;

            if (!name) {
                res.writeHead(400);
                res.end("Fehler: Name ist erforderlich");
                return;
            }

            res.end(`Hallo, ${name}!`);
        } catch (error) {
            res.writeHead(400);
            res.end("Fehler: Ungültiges JSON");
        }
    });
};
