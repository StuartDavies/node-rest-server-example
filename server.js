const http = require('http')

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) =>
{
    if (request.url === "/api" && request.method === "GET")
    {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write("Some data from a vanilla node server")
        response.end();
    }
    else
    {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});