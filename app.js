const http = require("http");
const fs = require("fs");

const tarballLoc = "./go-go1.15beta1.tar.gz";

// Keep track of number of requests
let i = 0;

// Send invalid, truncated response first
let truncatedSent = false;

http
  .createServer((req, res) => {
    console.log(`Iteration ${i} `);
    // Fail
    if (i < 1) {
      res.statusCode = 500;
      res.end(`Fake error`);
      i++;
    } else {
      // Serve tarball

      if (!truncatedSent) {
        fs.readFile(tarballLoc, function (err, data) {
          res.setHeader("Content-type", "application/tar+gzip");

          truncatedSent = true;
          res.end("truncated response");
        });
      } else {
        fs.readFile(tarballLoc, function (err, data) {
          res.setHeader("Content-type", "application/tar+gzip");

          res.end(data);
        });
      }
    }
  })
  .listen(3000);
