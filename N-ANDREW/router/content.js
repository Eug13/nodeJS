const fs = require('fs');
const path = require('path');

function content(req, res) {
    const ex = path.extname(req.url);
    // console.log(ex);
    let contentType = '';
    switch (ex) {
        case '.html':
            {
                contentType = 'text/html';
                break;
            }
        case '.css':
            {
                contentType = 'text/css';
                break;
            }
        case '.png':
            {
                contentType = 'image/png';
                break;
            }
        case '.jpg':
            {
                contentType = 'image/jpeg';
                break;
            }
        case '.jpeg':
            {
                contentType = 'image/jpeg';
                break;
            }
        case '.svg':
            {
                contentType = 'image/svg+xml';
                break;
            }
        case '.gif':
            {
                contentType = 'image/gif';
                break;
            }
        case '.woff':
            {
                contentType = 'font/woff';
                break;
            }
        case '.woff2':
            {
                contentType = 'font/woff2';
                break;
            }
        case '.otf':
            {
                contentType = 'font/otf';
                break;
            }
        case '.ttf':
            {
                contentType = 'font/ttf';
                break;
            }
        case '.eot':
            {
                contentType = 'application/vnd.ms-fontobject';
                break;
            }
    }
    res.writeHead(200, {
        'Content-Type': contentType
    });
    const stream = fs.createReadStream(path.join(__dirname, `../build${req.url}`));
    stream.pipe(res);
}

module.exports = content;