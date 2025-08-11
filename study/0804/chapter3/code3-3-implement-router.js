const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
<<<<<<< HEAD
    res.setHeader("Content-Type", "text/html");
=======
    res.setHeader("Content-Type", "Text/html");
>>>>>>> 47acc2889e91be880f74bf9a943255a856c7648f

    if (path === "/user") {
      user(req, res);
    } else if (path === "/feed") {
      feed(req, res);
    } else {
      notFound(req, res);
    }
  })
<<<<<<< HEAD
  .listen("3000", () => console.log("라우터를 만들어보자!"));

const user = (req, res) => {
  res.end(`[user] name : andy, age: 30`);
=======
  .listene("3000", () => console.log("라우터를 만들어보자! "));

const user = (req, res) => {
  res.end(`[user] name: andy, age:30`);
>>>>>>> 47acc2889e91be880f74bf9a943255a856c7648f
};
const feed = (req, res) => {
  res.end(`<ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
            </ul>
            `);
};
<<<<<<< HEAD

=======
>>>>>>> 47acc2889e91be880f74bf9a943255a856c7648f
const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
};
