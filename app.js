const http = require("http");
const fs = require("fs");

// Keep track of number of requests
let i = 0;

http
  .createServer((req, res) => {
    console.log(`Iteration ${i} `);
    // Fail
    if (i < 5) {
      res.statusCode = 500;
      res.end(`Fake error`);
      i++;
    } else {
      // Serve tarball
      fs.readFile("./octokit.tar.gz", function (err, data) {
        res.setHeader("Content-type", "application/tar+gzip");
        res.end(data);
      });
    }
  })
  .listen(3000);
