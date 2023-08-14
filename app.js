const http = require('http');
const port = 4000;

const server = http.createServer((clientRequest, clientResponse) => {
    const options = {
        hostname: 'https://www.nseindia.com/api/latest-circular',
        method: clientRequest.method,
        headers: clientRequest.headers
    };
    makeRequest(options, clientRequest, clientResponse);
});

const makeRequest = (options, clientRequest, clientResponse) => {
    const proxy = http.request(options, res => {
        clientRequest.writeHead(res.statusCode, res.headers);
        res.pipe(clientResponse, {end: true});
    });
    clientRequest.pipe(proxy,{end: true});
};

server.listen(port, () => console.log(`Proxy Server Running on port ${port}`))