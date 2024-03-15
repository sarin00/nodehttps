const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('<h1>Testing</h1>');
    //res.end();

    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'website', 'index.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
            res.end();
        });
    }

    if (req.url === '/about'){
        fs.readFile(path.join(__dirname, 'website', 'about.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
            res.end();
        });
    }

    if (req.url === '/api/users'){
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Margoe Johnson', age: 27 },
            { name: 'Edgar Poe', age: 36 },
            { name: 'Oscar Wild', age: 52 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(users));
        res.end();
    }

    if (req.url === '/api/bad'){
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Margoe Johnson', age: 27 },
            { name: 'Edgar Poe', age: 36 },
            { name: 'Oscar Wild', age: 52 }
        ];
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(users));
        res.end();
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
