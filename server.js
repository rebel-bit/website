var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    var url = req.url;

    if (url === "/") {
      fs.readFile("index.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/profile") {
      fs.readFile("profile.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/blog") {
      fs.readFile("blog.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/perpus") {
      fs.readFile("perpus.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/view") {
      fs.readFile("/assets/pdf/contoh.pdf", function (_err, data) {
        res.end(data);
      });
    } else {
      res.write("<center><pre><code>awas tak hacked</center></pre></code>");
      res.end();
    }
  })
  .listen(9000, function () {
    console.log("server start at http://localhost:9000");
  });
