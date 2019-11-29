const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    setTimeout(() => {
        switch (pathname) {
            case '/a':
                res.end('aaaaaaaaaaaaa');
                break;
            case '/b':
                res.end('bbbbbbbbbbbbb');
                break;
            case '/c':
                res.end('ccccccccccccc');
                break;
            case '/d':
                res.end('ddddddddddddd');
                break;
        }
    }, 500);
}).listen(8888);