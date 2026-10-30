const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hola desde apps/api ${process.version}\n`);
}).listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});
