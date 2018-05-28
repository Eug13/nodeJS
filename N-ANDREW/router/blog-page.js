const fs = require('fs');
const path = require('path');

function blogPage(req, res) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'html');

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    const stream = fs.createReadStream(path.join(__dirname, '../build/blog.html'));
    stream.pipe(res);
}

module.exports = blogPage;