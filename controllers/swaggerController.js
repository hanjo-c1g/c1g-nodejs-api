const fs = require("fs");
const path = require("path");

exports.swaggerJSON = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    
    const swaggerData = fs.readFileSync(path.join(__dirname, "../data/swagger.json"));
    console.log(path.join(__dirname, "../data/swagger.json"))
    res.end(swaggerData);
    return;
}

exports.swaggerUI = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Swagger UI</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css">
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.min.js"></script>
        <script>
          window.onload = function() {
            SwaggerUIBundle({
              url: 'http://localhost:3000/swagger.json',
              dom_id: '#swagger-ui'
            });
          }
        </script>
      </body>
      </html>
    `);
}